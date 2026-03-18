

## Fix: Assign Admin Role

You need one SQL insert to grant your user the `admin` role:

```sql
INSERT INTO public.user_roles (user_id, role)
VALUES ('5efa0b8c-295e-4384-896f-e0385e1eeeae', 'admin');
```

This is a **data insert**, not a schema change. After this runs, logging in at `/auth` will grant access to `/admin`.

No code changes needed — the `useAdminAuth` hook and `ProtectedAdminRoute` are already wired up correctly.

