# Environment Variables for AuthentikStudio

## Required Environment Variables

### Email Service (Resend)
```
RESEND_API_KEY=your_resend_api_key_here
```

### Database (Supabase)
```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Analytics (Google Analytics)
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Site Verification
```
GOOGLE_SITE_VERIFICATION=your_google_verification_code
```

### Error Tracking (Sentry)
```
NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn_here
```

### Admin Access
```
ADMIN_TOKEN=your_admin_token_for_api_access
```

## How to Set Up

1. **Resend**: Get your API key from https://resend.com/api-keys
2. **Supabase**: Get your project URL and anon key from your Supabase dashboard
3. **Google Analytics**: Create a GA4 property and get your measurement ID
4. **Google Search Console**: Add your site and get the verification code
5. **Sentry**: Create a project and get your DSN from the project settings

## Vercel Deployment

Add these environment variables in your Vercel dashboard:
- Go to your project settings
- Navigate to "Environment Variables"
- Add each variable with the appropriate value
- Make sure to set them for Production, Preview, and Development environments

## Security Notes

- Never commit these values to version control
- Use different values for development and production
- Rotate API keys regularly
- Monitor usage and set up alerts for unusual activity
