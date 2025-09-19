import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const { email, firstName, lastName, template, sequenceStep, archetype } = await request.json()

    if (!email || !template) {
      return NextResponse.json({ error: 'Email and template are required' }, { status: 400 })
    }

    const emailContent = getEmailTemplate(template, { firstName, lastName, sequenceStep, archetype })
    
    if (!emailContent) {
      return NextResponse.json({ error: 'Invalid template' }, { status: 400 })
    }

    const { data, error } = await resend.emails.send({
      from: 'AuthentikStudio <noreply@authentikstudio.com>',
      to: [email],
      subject: emailContent.subject,
      html: emailContent.html,
      text: emailContent.text,
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, messageId: data?.id })
  } catch (error) {
    console.error('Email sequence error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

function getEmailTemplate(template: string, data: { firstName?: string; lastName?: string; sequenceStep?: number; archetype?: string }) {
  const { firstName, lastName, sequenceStep, archetype } = data
  const name = firstName ? `${firstName}${lastName ? ` ${lastName}` : ''}` : 'there'
  
  // Default to Transformer Founder if no archetype provided
  const archetypeName = archetype || 'Transformer Founder'
  const archetypeStrength = archetypeName === 'Transformer Founder' ? 'authentic connection' : 'strategic thinking'
  const archetypeChallenge = archetypeName === 'Transformer Founder' ? 'strategic positioning' : 'authentic vulnerability'

  switch (template) {
    case 'welcome-sequence':
      return {
        subject: "Your Founder Archetype Results (+ the €6M truth)",
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; padding: 20px;">
            <p>Hi ${name},</p>
            
            <p>Thanks for taking the Founder Story Assessment!</p>
            
            <p>Your results revealed you're a <strong>${archetypeName}</strong> - which means ${archetypeStrength} but you might struggle with ${archetypeChallenge}.</p>
            
            <p>Here's what's interesting: Most ${archetypeName}s I work with have the same pattern. They're brilliant at ${archetypeStrength} but when it comes to ${archetypeChallenge}, they hit a wall.</p>
            
            <p>Take J-Griff (you saw him in your results). Classic ${archetypeName}. Brilliant tech founder, but his story felt... generic.</p>
            
            <p><strong>18 months later: €2M to €8M revenue.</strong><br>
            What changed? Not his product. His story.</p>
            
            <p>I'll share exactly how over the next few days.</p>
            
            <p>Worth staying tuned?</p>
            
            <p>Best,<br>Ermo</p>
            
            <p style="font-size: 12px; color: #666;">P.S. Your personalized archetype guide is attached. It's based on actual patterns I've seen in 100+ founder assessments.</p>
          </div>
        `,
        text: `Hi ${name},

Thanks for taking the Founder Story Assessment!

Your results revealed you're a ${archetypeName} - which means ${archetypeStrength} but you might struggle with ${archetypeChallenge}.

Here's what's interesting: Most ${archetypeName}s I work with have the same pattern. They're brilliant at ${archetypeStrength} but when it comes to ${archetypeChallenge}, they hit a wall.

Take J-Griff (you saw him in your results). Classic ${archetypeName}. Brilliant tech founder, but his story felt... generic.

18 months later: €2M to €8M revenue.
What changed? Not his product. His story.

I'll share exactly how over the next few days.

Worth staying tuned?

Best,
Ermo

P.S. Your personalized archetype guide is attached. It's based on actual patterns I've seen in 100+ founder assessments.`
      }

    case 'case-study':
      return {
        subject: "What National Geographic taught me about founder stories",
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; padding: 20px;">
            <p>${name},</p>
            
            <p>Quick story that changed everything for me:</p>
            
            <p>I was watching David Attenborough narrate a nature documentary. Same animals everyone's seen before, but millions of people were glued to their screens.</p>
            
            <p><strong>Why?</strong></p>
            
            <p>It wasn't the animals. It was how Attenborough told their story.</p>
            
            <p>Then it hit me: Founders have the same problem animals do.</p>
            
            <p>Everyone sees the surface (your product, your metrics, your pitch deck).<br>
            But nobody sees the real story - your transformation, your "why," the moments that forged you.</p>
            
            <p>That's when I partnered with John (15+ years creating stories for National Geographic, BBC, Discovery).</p>
            
            <p>We started applying documentary storytelling techniques to founder narratives.</p>
            
            <p><strong>Result? J-Griff went from invisible to €6M revenue increase in 18 months.</strong></p>
            
            <p>The method we developed? I call it "Archaeological Story Excavation."</p>
            
            <p>More on that tomorrow.</p>
            
            <p>Best,<br>Ermo</p>
            
            <p style="font-size: 12px; color: #666;">P.S. Based on your assessment, you're already strong at ${archetypeStrength}. The documentary approach would amplify that by 10x.</p>
          </div>
        `,
        text: `${name},

Quick story that changed everything for me:

I was watching David Attenborough narrate a nature documentary. Same animals everyone's seen before, but millions of people were glued to their screens.

Why?

It wasn't the animals. It was how Attenborough told their story.

Then it hit me: Founders have the same problem animals do.

Everyone sees the surface (your product, your metrics, your pitch deck).
But nobody sees the real story - your transformation, your "why," the moments that forged you.

That's when I partnered with John (15+ years creating stories for National Geographic, BBC, Discovery).

We started applying documentary storytelling techniques to founder narratives.

Result? J-Griff went from invisible to €6M revenue increase in 18 months.

The method we developed? I call it "Archaeological Story Excavation."

More on that tomorrow.

Best,
Ermo

P.S. Based on your assessment, you're already strong at ${archetypeStrength}. The documentary approach would amplify that by 10x.`
      }

    case 'mistakes':
      return {
        subject: "The €6M story transformation (behind the scenes)",
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; padding: 20px;">
            <p>${name},</p>
            
            <p>Let me tell you the real J-Griff story (with his permission):</p>
            
            <p>When we first met, he was frustrated. Great product, solid team, but stuck at €2M revenue for 18 months.</p>
            
            <p>His pitch? Technical features, market size, competitive advantages.<br>
            <strong>Sound familiar?</strong></p>
            
            <p>Here's what we discovered during our "Archaeological Story Excavation":</p>
            
            <p>J-Griff had survived a serious health scare that completely changed his perspective on what technology could do for people. That vulnerability, that transformation - <strong>THAT was his real story.</strong></p>
            
            <p>But he'd buried it under business jargon.</p>
            
            <p>We didn't change his product. We excavated his authentic transformation story and applied documentary narrative techniques to how he communicated it.</p>
            
            <p><strong>Result:</strong><br>
            - Investors started remembering his pitches<br>
            - Customers connected with his mission<br>
            - Team members felt inspired by the deeper purpose<br>
            - Revenue: €2M → €8M in 18 months</p>
            
            <p>Your assessment showed you're a <strong>${archetypeName}</strong>.<br>
            I bet you have a transformation story even more powerful than J-Griff's.</p>
            
            <p>The question is: Are you ready to excavate it?</p>
            
            <p>Best,<br>Ermo</p>
            
            <p style="font-size: 12px; color: #666;">P.S. J-Griff invested €12,500 in our Signal DNA method. ROI: 48,000%. Not bad for storytelling, right?</p>
          </div>
        `,
        text: `${name},

Let me tell you the real J-Griff story (with his permission):

When we first met, he was frustrated. Great product, solid team, but stuck at €2M revenue for 18 months.

His pitch? Technical features, market size, competitive advantages.
Sound familiar?

Here's what we discovered during our "Archaeological Story Excavation":

J-Griff had survived a serious health scare that completely changed his perspective on what technology could do for people. That vulnerability, that transformation - THAT was his real story.

But he'd buried it under business jargon.

We didn't change his product. We excavated his authentic transformation story and applied documentary narrative techniques to how he communicated it.

Result:
- Investors started remembering his pitches
- Customers connected with his mission
- Team members felt inspired by the deeper purpose
- Revenue: €2M → €8M in 18 months

Your assessment showed you're a ${archetypeName}.
I bet you have a transformation story even more powerful than J-Griff's.

The question is: Are you ready to excavate it?

Best,
Ermo

P.S. J-Griff invested €12,500 in our Signal DNA method. ROI: 48,000%. Not bad for storytelling, right?`
      }

    case 'intensive-invite':
      return {
        subject: "The Signal DNA Method (used by documentary filmmakers)",
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; padding: 20px;">
            <p>${name},</p>
            
            <p>You've been asking about the exact method we used with J-Griff.</p>
            
            <p>Here's the framework:</p>
            
            <p><strong>STEP 1: Archaeological Story Excavation</strong><br>
            We dig deeper than "why did you start your company?"<br>
            We find the transformation moments that created your unique perspective.</p>
            
            <p><strong>STEP 2: Documentary Narrative Architecture</strong><br>
            Using techniques from National Geographic documentaries, we structure your story with emotional arcs that captivate (not bore) your audience.</p>
            
            <p><strong>STEP 3: Multi-Audience Signal Amplification</strong><br>
            One authentic story, adapted for three critical audiences: investors, customers, talent.</p>
            
            <p>The whole process takes 72 hours of intensive work spread over 3-4 weeks.</p>
            
            <p>Based on your <strong>${archetypeName}</strong> results, I can see exactly which story elements would make you irresistible to your three key audiences.</p>
            
            <p>Most founders try to DIY this. That's like trying to film your own National Geographic documentary.</p>
            
            <p>Possible? Sure.<br>
            Effective? Not so much.</p>
            
            <p>Ready to do this the right way?</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://calendly.com/ermo/authentik-studio-audit-review" style="background: #ffb800; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                BOOK YOUR SIGNAL DNA DISCOVERY CALL
              </a>
            </div>
            
            <p>Best,<br>Ermo</p>
            
            <p style="font-size: 12px; color: #666;">P.S. We only work with 12 founders per quarter. Next intensive cohort starts January 15th. 3 spots remaining.</p>
          </div>
        `,
        text: `${name},

You've been asking about the exact method we used with J-Griff.

Here's the framework:

STEP 1: Archaeological Story Excavation
We dig deeper than "why did you start your company?"
We find the transformation moments that created your unique perspective.

STEP 2: Documentary Narrative Architecture
Using techniques from National Geographic documentaries, we structure your story with emotional arcs that captivate (not bore) your audience.

STEP 3: Multi-Audience Signal Amplification
One authentic story, adapted for three critical audiences: investors, customers, talent.

The whole process takes 72 hours of intensive work spread over 3-4 weeks.

Based on your ${archetypeName} results, I can see exactly which story elements would make you irresistible to your three key audiences.

Most founders try to DIY this. That's like trying to film your own National Geographic documentary.

Possible? Sure.
Effective? Not so much.

Ready to do this the right way?

BOOK YOUR SIGNAL DNA DISCOVERY CALL: https://calendly.com/ermo/authentik-studio-audit-review

Best,
Ermo

P.S. We only work with 12 founders per quarter. Next intensive cohort starts January 15th. 3 spots remaining.`
      }

    case 'final-followup':
      return {
        subject: "Last email (and why I'm being selective)",
        html: `
          <div style="max-width: 600px; margin: 0 auto; font-family: Arial, sans-serif; padding: 20px;">
            <p>${name},</p>
            
            <p>This is my final email in this sequence.</p>
            
            <p>Here's the truth: Not every founder is ready for what we do.</p>
            
            <p>The Signal DNA method requires vulnerability. You have to be willing to excavate the real transformation moments - including the messy, imperfect parts.</p>
            
            <p>J-Griff had to talk about his health scare.<br>
            Aaron Abke had to discuss his spiritual awakening crisis.<br>
            Both felt scary to share.</p>
            
            <p>Both led to breakthroughs that transformed their businesses.</p>
            
            <p>Your <strong>${archetypeName}</strong> assessment suggests you have a powerful transformation story waiting to be told. The question is: Are you brave enough to tell it?</p>
            
            <div style="text-align: center; margin: 30px 0;">
              <a href="https://calendly.com/ermo/authentik-studio-audit-review" style="background: #ffb800; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                BOOK YOUR DISCOVERY CALL
              </a>
            </div>
            
            <p>If yes: Book your discovery call above.<br>
            If not: I wish you the absolute best. Seriously.</p>
            
            <p>The founders who change the world are the ones who stop hiding behind features and start sharing their truth.</p>
            
            <p><strong>Which founder will you be?</strong></p>
            
            <p>Best,<br>Ermo</p>
            
            <p style="font-size: 12px; color: #666;">P.S. Even if we never work together, remember this: Your story is your strategy. Don't leave it untold.</p>
          </div>
        `,
        text: `${name},

This is my final email in this sequence.

Here's the truth: Not every founder is ready for what we do.

The Signal DNA method requires vulnerability. You have to be willing to excavate the real transformation moments - including the messy, imperfect parts.

J-Griff had to talk about his health scare.
Aaron Abke had to discuss his spiritual awakening crisis.
Both felt scary to share.

Both led to breakthroughs that transformed their businesses.

Your ${archetypeName} assessment suggests you have a powerful transformation story waiting to be told. The question is: Are you brave enough to tell it?

BOOK YOUR DISCOVERY CALL: https://calendly.com/ermo/authentik-studio-audit-review

If yes: Book your discovery call above.
If not: I wish you the absolute best. Seriously.

The founders who change the world are the ones who stop hiding behind features and start sharing their truth.

Which founder will you be?

Best,
Ermo

P.S. Even if we never work together, remember this: Your story is your strategy. Don't leave it untold.`
      }

    default:
      return null
  }
}