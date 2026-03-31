import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Star, Plus, Trash2, Edit, RefreshCw, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

interface Review {
  id: string;
  reviewer_name: string;
  rating: number;
  review_text: string;
  review_date: string | null;
  service_type: string | null;
  location: string | null;
  source: string | null;
  verified: boolean | null;
}

const SERVICE_OPTIONS = [
  { value: 'loan-signing', label: 'Loan Signing' },
  { value: 'mortgage', label: 'Mortgage' },
  { value: 'real-estate', label: 'Real Estate' },
  { value: 'estate', label: 'Estate Planning' },
  { value: 'title-transfer', label: 'Title Transfer' },
  { value: 'mobile-notary', label: 'Mobile Notary' },
  { value: 'apostille', label: 'Apostille' },
  { value: 'urgent', label: 'Urgent Service' },
  { value: 'first-home', label: 'First Home Purchase' },
  { value: 'general', label: 'General Notary' },
  { value: 'refinance', label: 'Refinance' },
];

interface ReviewManagerProps {
  onClose?: () => void;
}

export function ReviewManager({ onClose }: ReviewManagerProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingReview, setEditingReview] = useState<Review | null>(null);
  const [form, setForm] = useState({
    reviewer_name: '',
    rating: 5,
    review_text: '',
    review_date: new Date().toISOString().split('T')[0],
    service_type: 'general',
    location: '',
  });

  const fetchReviews = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('testimonials')
      .select('*')
      .eq('source', 'google')
      .order('review_date', { ascending: false });

    if (error) {
      toast.error('Failed to load reviews');
    } else {
      setReviews((data as Review[]) || []);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  const handleSave = async () => {
    if (!form.reviewer_name || !form.review_text) {
      toast.error('Name and review text are required');
      return;
    }

    const payload = {
      reviewer_name: form.reviewer_name,
      rating: form.rating,
      review_text: form.review_text,
      review_date: form.review_date || null,
      service_type: form.service_type || null,
      location: form.location || null,
      source: 'google' as const,
      verified: true,
    };

    if (editingReview) {
      const { error } = await supabase
        .from('testimonials')
        .update(payload)
        .eq('id', editingReview.id);
      if (error) {
        toast.error('Failed to update review');
        return;
      }
      toast.success('Review updated');
    } else {
      const { error } = await supabase
        .from('testimonials')
        .insert(payload);
      if (error) {
        toast.error('Failed to add review');
        return;
      }
      toast.success('Review added');
    }

    setDialogOpen(false);
    setEditingReview(null);
    resetForm();
    fetchReviews();
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this review?')) return;
    const { error } = await supabase.from('testimonials').delete().eq('id', id);
    if (error) {
      toast.error('Failed to delete review');
    } else {
      toast.success('Review deleted');
      fetchReviews();
    }
  };

  const handleEdit = (review: Review) => {
    setEditingReview(review);
    setForm({
      reviewer_name: review.reviewer_name,
      rating: review.rating,
      review_text: review.review_text,
      review_date: review.review_date || '',
      service_type: review.service_type || 'general',
      location: review.location || '',
    });
    setDialogOpen(true);
  };

  const handleSync = async () => {
    setSyncing(true);
    try {
      const projectId = import.meta.env.VITE_SUPABASE_PROJECT_ID;
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/fetch-google-reviews`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
        }
      );
      const result = await response.json();
      if (response.ok) {
        toast.success(`Sync complete: ${result.newReviews || 0} new reviews added`);
        fetchReviews();
      } else {
        toast.error(result.error || 'Sync failed — is your Google API key configured?');
      }
    } catch {
      toast.error('Sync failed — check edge function configuration');
    }
    setSyncing(false);
  };

  const resetForm = () => {
    setForm({
      reviewer_name: '',
      rating: 5,
      review_text: '',
      review_date: new Date().toISOString().split('T')[0],
      service_type: 'general',
      location: '',
    });
    setEditingReview(null);
  };

  const avgRating = reviews.length > 0
    ? (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1)
    : '0.0';

  return (
    <div className="space-y-6">
      {/* Stats Bar */}
      <div className="flex flex-wrap items-center gap-4">
        <Badge variant="secondary" className="text-lg px-4 py-2">
          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
          {avgRating} avg
        </Badge>
        <Badge variant="outline" className="text-lg px-4 py-2">
          {reviews.length} total reviews
        </Badge>
        <div className="ml-auto flex gap-2">
          <Button variant="outline" onClick={handleSync} disabled={syncing}>
            <RefreshCw className={`h-4 w-4 mr-2 ${syncing ? 'animate-spin' : ''}`} />
            {syncing ? 'Syncing...' : 'Sync from Google'}
          </Button>
          <Dialog open={dialogOpen} onOpenChange={(open) => {
            setDialogOpen(open);
            if (!open) resetForm();
          }}>
            <DialogTrigger asChild>
              <Button>
                <Plus className="h-4 w-4 mr-2" />
                Add Review
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-lg">
              <DialogHeader>
                <DialogTitle>{editingReview ? 'Edit Review' : 'Add New Review'}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label>Reviewer Name *</Label>
                  <Input
                    value={form.reviewer_name}
                    onChange={e => setForm(f => ({ ...f, reviewer_name: e.target.value }))}
                    placeholder="John Smith"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Rating</Label>
                    <Select
                      value={String(form.rating)}
                      onValueChange={v => setForm(f => ({ ...f, rating: Number(v) }))}
                    >
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {[5, 4, 3, 2, 1].map(n => (
                          <SelectItem key={n} value={String(n)}>{n} Stars</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Date</Label>
                    <Input
                      type="date"
                      value={form.review_date}
                      onChange={e => setForm(f => ({ ...f, review_date: e.target.value }))}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label>Service Type</Label>
                    <Select
                      value={form.service_type}
                      onValueChange={v => setForm(f => ({ ...f, service_type: v }))}
                    >
                      <SelectTrigger><SelectValue /></SelectTrigger>
                      <SelectContent>
                        {SERVICE_OPTIONS.map(o => (
                          <SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label>Location</Label>
                    <Input
                      value={form.location}
                      onChange={e => setForm(f => ({ ...f, location: e.target.value }))}
                      placeholder="Lebanon"
                    />
                  </div>
                </div>
                <div>
                  <Label>Review Text *</Label>
                  <Textarea
                    value={form.review_text}
                    onChange={e => setForm(f => ({ ...f, review_text: e.target.value }))}
                    placeholder="Paste the review text here..."
                    rows={4}
                  />
                </div>
                <Button onClick={handleSave} className="w-full">
                  {editingReview ? 'Update Review' : 'Add Review'}
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      {/* Reviews Table */}
      <Card>
        <CardContent className="p-0">
          {loading ? (
            <div className="p-8 text-center text-muted-foreground">Loading reviews...</div>
          ) : (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Reviewer</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead className="hidden md:table-cell">Service</TableHead>
                  <TableHead className="hidden md:table-cell">Location</TableHead>
                  <TableHead className="hidden lg:table-cell">Date</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {reviews.map(review => (
                  <TableRow key={review.id}>
                    <TableCell className="font-medium">{review.reviewer_name}</TableCell>
                    <TableCell>
                      <div className="flex">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </TableCell>
                    <TableCell className="hidden md:table-cell">
                      {SERVICE_OPTIONS.find(o => o.value === review.service_type)?.label || review.service_type || '—'}
                    </TableCell>
                    <TableCell className="hidden md:table-cell">{review.location || '—'}</TableCell>
                    <TableCell className="hidden lg:table-cell">{review.review_date || '—'}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-1">
                        <Button variant="ghost" size="sm" onClick={() => handleEdit(review)}>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm" onClick={() => handleDelete(review.id)}>
                          <Trash2 className="h-4 w-4 text-destructive" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
