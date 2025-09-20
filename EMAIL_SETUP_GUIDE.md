# Email Automation Setup Guide

## Required Environment Variables

Add these to your `.env.local` file:

```bash
# Email Configuration (Required)
RESEND_API_KEY=your_resend_api_key_here

# Google Analytics (Optional but recommended)
NEXT_PUBLIC_GA_ID=your_google_analytics_id_here

# Google Site Verification (Optional)
GOOGLE_SITE_VERIFICATION=your_google_site_verification_code_here
```

## Email Service Setup

### 1. Resend Account Setup
1. Sign up at [resend.com](https://resend.com)
2. Verify your domain (authentikstudio.com)
3. Generate an API key
4. Add the API key to your environment variables

### 2. Email Templates
The system includes 5 professionally designed email templates:

- **Email 1**: Instant quiz results with archetype and next steps
- **Email 2**: J-Griff case study (Day 1)
- **Email 3**: 3 storytelling hacks (Day 3)
- **Email 4**: Scarcity reminder (Day 5)
- **Email 5**: 30-day guarantee & final nudge (Day 7)

### 3. Email Scheduling
- **Immediate**: Quiz results email sent instantly
- **Day 1**: Case study email
- **Day 3**: Educational content
- **Day 5**: Scarcity reminder
- **Day 7**: Final guarantee nudge

## Features Included

### ✅ Dynamic Personalization
- User's first name extracted from email
- Personalized archetype results
- Customized strength and blind spot insights

### ✅ Professional Design
- Mobile-responsive HTML emails
- Branded templates with Authentik Studio colors
- Clear CTAs with Calendly integration

### ✅ Analytics Integration
- Email open/click tracking via Resend
- Custom tags for segmentation
- Source tracking for attribution

### ✅ Error Handling
- Graceful fallbacks if email sending fails
- Comprehensive error logging
- User experience not impacted by email issues

## Testing

### 1. Test Email Sending
```bash
curl -X POST http://localhost:3000/api/send-quiz-email \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "John",
    "archetype": "Visionary Navigator",
    "strength": "Future-focused vision",
    "blindSpot": "Customer accessibility"
  }'
```

### 2. Test Nurture Sequence
```bash
curl -X POST http://localhost:3000/api/schedule-nurture-sequence \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com",
    "firstName": "John",
    "archetype": "Visionary Navigator",
    "strength": "Future-focused vision",
    "blindSpot": "Customer accessibility"
  }'
```

## Customization

### Email Content
Edit templates in `/lib/email-templates.ts`:
- Modify subject lines
- Update email content
- Adjust styling and branding
- Change CTA links

### Scheduling
Modify timing in `/app/api/schedule-nurture-sequence/route.ts`:
```typescript
const EMAIL_SCHEDULE = {
  email2: 24 * 60 * 60 * 1000, // Day 1 (24 hours)
  email3: 3 * 24 * 60 * 60 * 1000, // Day 3 (72 hours)
  email4: 5 * 24 * 60 * 60 * 1000, // Day 5 (120 hours)
  email5: 7 * 24 * 60 * 60 * 1000, // Day 7 (168 hours)
}
```

## Monitoring

### Resend Dashboard
- Track email delivery rates
- Monitor open and click rates
- View bounce and complaint rates

### Analytics
- Email engagement metrics
- Conversion tracking from emails to bookings
- A/B testing capabilities

## Troubleshooting

### Common Issues
1. **Emails not sending**: Check RESEND_API_KEY
2. **Domain not verified**: Verify domain in Resend dashboard
3. **Templates not loading**: Check file paths and imports
4. **Scheduling not working**: Verify Resend supports scheduled emails

### Debug Mode
Add console.log statements to track email sending:
```typescript
console.log('Sending email to:', email)
console.log('Email response:', data)
```

## Support

For technical issues:
- Check Resend documentation
- Review API response logs
- Test with curl commands above

For content changes:
- Edit templates in `/lib/email-templates.ts`
- Update scheduling in API routes
- Modify quiz integration in `/app/quiz-optimized/page.tsx`
