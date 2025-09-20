interface EmailTemplate {
  subject: string
  html: string
  text: string
}

interface UserData {
  firstName: string
  archetype: string
  strength: string
  blindSpot: string
  email: string
}

// Email 1: Instant Quiz Results & Next Steps
export function getEmail1(userData: UserData): EmailTemplate {
  const subject = `${userData.firstName}, here's your Founder Archetype & your next step`
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Your Founder Archetype Results</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e1e5e9; }
        .archetype-box { background: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; margin: 20px 0; border-radius: 5px; }
        .cta-button { display: inline-block; background: #28a745; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
        .cta-button:hover { background: #218838; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; border-radius: 0 0 10px 10px; }
        .highlight { color: #667eea; font-weight: bold; }
        .strength, .blindspot { margin: 10px 0; }
        .strength { color: #28a745; }
        .blindspot { color: #dc3545; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎯 Your Founder Archetype Results</h1>
        <p>Signal DNA Discovery™ Complete</p>
      </div>
      
      <div class="content">
        <p>Hi ${userData.firstName},</p>
        
        <p>Congratulations—you're officially a <span class="highlight">${userData.archetype}</span>! In just 2 minutes, you've unlocked your Signal DNA Snapshot:</p>
        
        <div class="archetype-box">
          <div class="strength"><strong>Strength:</strong> ${userData.strength}</div>
          <div class="blindspot"><strong>Blind Spot:</strong> ${userData.blindSpot}</div>
        </div>
        
        <p>Your full Story Blueprint is attached below. To turn these insights into client-winning narratives, let's book your <strong>FREE Strategy Session</strong>. In this 45-minute call we'll:</p>
        
        <ul>
          <li>Translate your archetype into a proven messaging framework</li>
          <li>Identify your top three "quick-win" story tweaks</li>
          <li>Map out your next steps toward industry legend status</li>
        </ul>
        
        <div style="text-align: center;">
          <a href="https://calendly.com/authentikstudio/strategy-session" class="cta-button">📅 Book Your Free Strategy Session</a>
        </div>
        
        <p>Excited to help you own your founder story,<br>
        <strong>Ermo & the Authentik Studio Team</strong></p>
      </div>
      
      <div class="footer">
        <p>Authentik Studio | Signal DNA Discovery™ Method</p>
        <p>Transform from Invisible Founder to Industry Legend</p>
      </div>
    </body>
    </html>
  `
  
  const text = `
Hi ${userData.firstName},

Congratulations—you're officially a ${userData.archetype}! In just 2 minutes, you've unlocked your Signal DNA Snapshot:

Strength: ${userData.strength}
Blind Spot: ${userData.blindSpot}

Your full Story Blueprint is attached below. To turn these insights into client-winning narratives, let's book your FREE Strategy Session. In this 45-minute call we'll:

- Translate your archetype into a proven messaging framework
- Identify your top three "quick-win" story tweaks
- Map out your next steps toward industry legend status

Book Your Free Strategy Session: https://calendly.com/authentikstudio/strategy-session

Excited to help you own your founder story,
Ermo & the Authentik Studio Team
  `
  
  return { subject, html, text }
}

// Email 2: Deep-Dive Case Study
export function getEmail2(userData: UserData): EmailTemplate {
  const subject = `How J-Griff 4×'d revenue—and the Signal DNA playbook`
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>J-Griff Case Study</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e1e5e9; }
        .case-study { background: #f8f9fa; padding: 20px; margin: 20px 0; border-radius: 5px; border-left: 4px solid #28a745; }
        .metrics { background: #e8f5e8; padding: 15px; margin: 15px 0; border-radius: 5px; text-align: center; }
        .cta-button { display: inline-block; background: #28a745; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
        .cta-button:hover { background: #218838; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; border-radius: 0 0 10px 10px; }
        .highlight { color: #667eea; font-weight: bold; }
        .scarcity { background: #fff3cd; border: 1px solid #ffeaa7; padding: 15px; border-radius: 5px; margin: 20px 0; text-align: center; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>📈 J-Griff's 4× Revenue Success</h1>
        <p>Signal DNA Case Study</p>
      </div>
      
      <div class="content">
        <p>Hi ${userData.firstName},</p>
        
        <p>When J-Griff came to us, he was building his conscious business coaching practice—and struggling to articulate his unique sovereignty journey. By applying his <span class="highlight">Visionary Navigator</span> archetype with our Signal DNA method, here's what happened:</p>
        
        <div class="case-study">
          <h3>🚀 Strategic Transformation:</h3>
          <ul>
            <li><strong>Strategic Narrative Shift:</strong> We reframed his founder story around his compelling "sovereignty journey," connecting deeply with conscious entrepreneurs seeking authentic wealth.</li>
            <li><strong>Emotional Hooks:</strong> Introduced targeted emotional moments from his $50K debt to multi-7-figure transformation to humanize his brand.</li>
            <li><strong>Consistent Messaging Framework:</strong> Developed a repeatable storytelling playbook for The Level Up Collective, conscious wealth education, and spiritual entrepreneurship.</li>
          </ul>
        </div>
        
        <div class="metrics">
          <h3>📊 The Results:</h3>
          <p><strong>Multi-7-Figure Business</strong> • <strong>The Level Up Collective Launched</strong> • <strong>High-Level Conscious Entrepreneurs Attracted</strong></p>
          <p><em>13+ years of sustained success</em></p>
        </div>
        
        <p>This same Signal DNA playbook can power your growth. Let's map it out in your <strong>FREE Strategy Session</strong>:</p>
        
        <div style="text-align: center;">
          <a href="https://calendly.com/authentikstudio/strategy-session" class="cta-button">📅 Reserve Your Spot</a>
        </div>
        
        <div class="scarcity">
          <strong>⚡ Only 2 founder spots left this quarter—claim yours now.</strong>
        </div>
        
        <p>To your breakout success,<br>
        <strong>Ermo & the Authentik Studio Team</strong></p>
      </div>
      
      <div class="footer">
        <p>Authentik Studio | Signal DNA Discovery™ Method</p>
        <p>Transform from Invisible Founder to Industry Legend</p>
      </div>
    </body>
    </html>
  `
  
  const text = `
Hi ${userData.firstName},

When J-Griff came to us, he was building his conscious business coaching practice—and struggling to articulate his unique sovereignty journey. By applying his Visionary Navigator archetype with our Signal DNA method, here's what happened:

Strategic Transformation:
- Strategic Narrative Shift: We reframed his founder story around his compelling "sovereignty journey," connecting deeply with conscious entrepreneurs seeking authentic wealth.
- Emotional Hooks: Introduced targeted emotional moments from his $50K debt to multi-7-figure transformation to humanize his brand.
- Consistent Messaging Framework: Developed a repeatable storytelling playbook for The Level Up Collective, conscious wealth education, and spiritual entrepreneurship.

The Results: Multi-7-Figure Business • The Level Up Collective Launched • High-Level Conscious Entrepreneurs Attracted
13+ years of sustained success

This same Signal DNA playbook can power your growth. Let's map it out in your FREE Strategy Session:
Reserve Your Spot: https://calendly.com/authentikstudio/strategy-session

⚡ Only 2 founder spots left this quarter—claim yours now.

To your breakout success,
Ermo & the Authentik Studio Team
  `
  
  return { subject, html, text }
}

// Email 3: Educational Value
export function getEmail3(userData: UserData): EmailTemplate {
  const subject = `${userData.firstName}, 3 storytelling hacks to grab attention`
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>3 Storytelling Hacks</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e1e5e9; }
        .hack-box { background: #f8f9fa; border: 1px solid #e1e5e9; padding: 20px; margin: 15px 0; border-radius: 5px; border-left: 4px solid #667eea; }
        .cta-button { display: inline-block; background: #28a745; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
        .cta-button:hover { background: #218838; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; border-radius: 0 0 10px 10px; }
        .highlight { color: #667eea; font-weight: bold; }
        .personalized { background: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎭 3 Storytelling Hacks</h1>
        <p>Grab Attention & Keep It</p>
      </div>
      
      <div class="content">
        <p>Hey ${userData.firstName},</p>
        
        <p>Great stories have structure. Here are three quick storytelling hacks you can use right now:</p>
        
        <div class="hack-box">
          <h3>1. 🎯 Start with Emotion</h3>
          <p>Open with a personal moment that humanizes your journey. Share a vulnerable moment or pivotal decision that shaped who you are today.</p>
        </div>
        
        <div class="hack-box">
          <h3>2. ⚓ Use "Story Anchors"</h3>
          <p>Drop vivid details (e.g., a pivotal startup setback, a moment of doubt, or a breakthrough insight) to keep readers hooked and create memorable moments.</p>
        </div>
        
        <div class="hack-box">
          <h3>3. 🔮 End with a Vision</h3>
          <p>Paint the future you're building—invite your audience into that story. Make them see themselves as part of your mission.</p>
        </div>
        
        <div class="personalized">
          <p>If you'd like a personalized walk-through of these techniques—tailored to your <span class="highlight">${userData.archetype}</span> archetype—let's dive deeper in a <strong>FREE Strategy Session</strong>:</p>
          
          <div style="text-align: center;">
            <a href="https://calendly.com/authentikstudio/strategy-session" class="cta-button">📅 Book Your Session</a>
          </div>
        </div>
        
        <p>To crafting magnetic narratives,<br>
        <strong>Ermo</strong></p>
      </div>
      
      <div class="footer">
        <p>Authentik Studio | Signal DNA Discovery™ Method</p>
        <p>Transform from Invisible Founder to Industry Legend</p>
      </div>
    </body>
    </html>
  `
  
  const text = `
Hey ${userData.firstName},

Great stories have structure. Here are three quick storytelling hacks you can use right now:

1. 🎯 Start with Emotion
Open with a personal moment that humanizes your journey. Share a vulnerable moment or pivotal decision that shaped who you are today.

2. ⚓ Use "Story Anchors"
Drop vivid details (e.g., a pivotal startup setback, a moment of doubt, or a breakthrough insight) to keep readers hooked and create memorable moments.

3. 🔮 End with a Vision
Paint the future you're building—invite your audience into that story. Make them see themselves as part of your mission.

If you'd like a personalized walk-through of these techniques—tailored to your ${userData.archetype} archetype—let's dive deeper in a FREE Strategy Session:

Book Your Session: https://calendly.com/authentikstudio/strategy-session

To crafting magnetic narratives,
Ermo
  `
  
  return { subject, html, text }
}

// Email 4: Scarcity Reminder
export function getEmail4(userData: UserData): EmailTemplate {
  const subject = `Only 2 spots left—secure your free session`
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Limited Spots Remaining</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #dc3545 0%, #c82333 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e1e5e9; }
        .scarcity-box { background: #fff3cd; border: 2px solid #ffeaa7; padding: 20px; margin: 20px 0; border-radius: 8px; text-align: center; }
        .metrics-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 15px; margin: 20px 0; }
        .metric { background: #e8f5e8; padding: 15px; text-align: center; border-radius: 5px; }
        .cta-button { display: inline-block; background: #dc3545; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
        .cta-button:hover { background: #c82333; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; border-radius: 0 0 10px 10px; }
        .highlight { color: #dc3545; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>⚠️ Only 2 Spots Left</h1>
        <p>Free Strategy Sessions</p>
      </div>
      
      <div class="content">
        <p>Hi ${userData.firstName},</p>
        
        <div class="scarcity-box">
          <h3>🚨 Just a heads-up: only <span class="highlight">2 founder spots</span> remain for this quarter's free Strategy Sessions.</h3>
        </div>
        
        <p>Past attendees have seen:</p>
        
        <div class="metrics-grid">
          <div class="metric">
            <h4>300%</h4>
            <p>Revenue Growth</p>
          </div>
          <div class="metric">
            <h4>156%</h4>
            <p>Increase in Qualified Leads</p>
          </div>
          <div class="metric">
            <h4>90%</h4>
            <p>Faster Sales Cycles</p>
          </div>
        </div>
        
        <p>Don't miss your chance to turn your archetype into a client-attraction engine. Claim your spot now:</p>
        
        <div style="text-align: center;">
          <a href="https://calendly.com/authentikstudio/strategy-session" class="cta-button">🚀 Grab Your Free Strategy Session</a>
        </div>
        
        <p>See you soon,<br>
        <strong>Ermo</strong></p>
      </div>
      
      <div class="footer">
        <p>Authentik Studio | Signal DNA Discovery™ Method</p>
        <p>Transform from Invisible Founder to Industry Legend</p>
      </div>
    </body>
    </html>
  `
  
  const text = `
Hi ${userData.firstName},

🚨 Just a heads-up: only 2 founder spots remain for this quarter's free Strategy Sessions.

Past attendees have seen:
- 300% revenue growth
- 156% increase in qualified leads  
- 90% faster sales cycles

Don't miss your chance to turn your archetype into a client-attraction engine. Claim your spot now:

Grab Your Free Strategy Session: https://calendly.com/authentikstudio/strategy-session

See you soon,
Ermo
  `
  
  return { subject, html, text }
}

// Email 5: Guarantee & Final Nudge
export function getEmail5(userData: UserData): EmailTemplate {
  const subject = `${userData.firstName}, your 30-Day Transformation Promise`
  
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>30-Day Transformation Promise</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #28a745 0%, #20c997 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: white; padding: 30px; border: 1px solid #e1e5e9; }
        .guarantee-box { background: #e8f5e8; border: 2px solid #28a745; padding: 20px; margin: 20px 0; border-radius: 8px; text-align: center; }
        .bonus-box { background: #fff3cd; border: 2px solid #ffeaa7; padding: 20px; margin: 20px 0; border-radius: 8px; text-align: center; }
        .cta-button { display: inline-block; background: #28a745; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; margin: 20px 0; }
        .cta-button:hover { background: #218838; }
        .footer { background: #f8f9fa; padding: 20px; text-align: center; font-size: 14px; color: #666; border-radius: 0 0 10px 10px; }
        .highlight { color: #28a745; font-weight: bold; }
        .deadline { background: #dc3545; color: white; padding: 10px; border-radius: 5px; text-align: center; margin: 20px 0; }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>🎯 30-Day Transformation Promise</h1>
        <p>Guaranteed Results</p>
      </div>
      
      <div class="content">
        <p>Hey ${userData.firstName},</p>
        
        <div class="guarantee-box">
          <h3>✅ Here's my <span class="highlight">30-Day Transformation Promise</span>:</h3>
          <p>If you don't feel your founder story has fundamentally transformed in 30 days, we'll keep refining at no extra cost.</p>
        </div>
        
        <div class="bonus-box">
          <h3>🎁 48-Hour Bonus:</h3>
          <p>Book in the next <strong>48 hours</strong> and receive a <span class="highlight">free mini video analysis</span> of your quiz results.</p>
        </div>
        
        <div class="deadline">
          <strong>⏰ 48-Hour Deadline: ${new Date(Date.now() + 48 * 60 * 60 * 1000).toLocaleDateString()}</strong>
        </div>
        
        <p>You have nothing to lose—and everything to gain:</p>
        
        <div style="text-align: center;">
          <a href="https://calendly.com/authentikstudio/strategy-session" class="cta-button">🚀 Book Your Guaranteed Strategy Session</a>
        </div>
        
        <p>Can't wait to help you become impossible to ignore,<br>
        <strong>Ermo</strong></p>
      </div>
      
      <div class="footer">
        <p>Authentik Studio | Signal DNA Discovery™ Method</p>
        <p>Transform from Invisible Founder to Industry Legend</p>
      </div>
    </body>
    </html>
  `
  
  const text = `
Hey ${userData.firstName},

✅ Here's my 30-Day Transformation Promise:
If you don't feel your founder story has fundamentally transformed in 30 days, we'll keep refining at no extra cost.

🎁 48-Hour Bonus:
Book in the next 48 hours and receive a free mini video analysis of your quiz results.

⏰ 48-Hour Deadline: ${new Date(Date.now() + 48 * 60 * 60 * 1000).toLocaleDateString()}

You have nothing to lose—and everything to gain:

Book Your Guaranteed Strategy Session: https://calendly.com/authentikstudio/strategy-session

Can't wait to help you become impossible to ignore,
Ermo
  `
  
  return { subject, html, text }
}

// Get all email templates
export function getAllEmailTemplates(userData: UserData): EmailTemplate[] {
  return [
    getEmail1(userData),
    getEmail2(userData),
    getEmail3(userData),
    getEmail4(userData),
    getEmail5(userData)
  ]
}
