// All homepage copy sourced from "Website Content 4.docx".
// Editing copy here updates every section on the page.

export const SEO = {
  title: 'OneConnect - Sales CRM Software for Growing Teams | OneConnect',
  description:
    'Manage leads, track your sales pipeline, and stay on top of follow-ups with OneConnect cloud-based sales CRM software. Book a demo.',
  h1: 'The Cloud CRM That Follows Your Customer Past the Sale'
};

export const HERO = {
  eyebrow: 'Cloud-Based Sales CRM',
  heading: 'CRM That Makes Your Next',
  headingAccent: 'Sales Move Clear',
  subheading:
    'OneConnect is cloud-based sales CRM software that helps your team manage leads, stay on top of follow-ups, and track every deal, so you know who to contact and what to do next.',
  strip: ['Leads', 'Customers', 'Follow-ups', 'Pipeline', 'One place'],
  // Brand reel shown in the banner's phone mock. The 42 MB master in the repo
  // root is re-encoded to public/media/oneconnect.mp4 (640x1138, ~1.6 MB).
  video: {
    src: '/media/oneconnect.mp4',
    poster: '/media/oneconnect-poster.jpg',
    label: 'OneConnect in 38 seconds',
    caption: 'See the platform'
  },
  pipelinePreview: {
    label: 'Pipeline snapshot',
    stages: [
      { name: 'Discover', count: '128', tone: 'muted' },
      { name: 'Qualified', count: '46', tone: 'soft' },
      { name: 'Proposal', count: '19', tone: 'mid' },
      { name: 'Negotiation', count: '11', tone: 'strong' },
      { name: 'Closed Won', count: '07', tone: 'win' }
    ],
    nextActions: [
      { who: 'Northline Logistics', what: 'Follow-up call due today' },
      { who: 'Meridian Health', what: 'Proposal awaiting response' },
      { who: 'Vertex Manufacturing', what: 'Deal cooling - no activity 9 days' }
    ]
  }
};

export const TRUSTED_BY = {
  eyebrow: 'Trusted By',
  heading: 'Built for Teams That Want a Better Way to Sell',
  logoSlots: 6
};

export const CORE_VALUE = {
  eyebrow: 'The Core Value',
  heading: 'Keep Every Lead Moving From First Contact to Closed Deal',
  problem:
    "Sales gets difficult when customer information is scattered, follow-ups are missed, and nobody has a clear view of what's happening in the pipeline.",
  solution:
    'OneConnect brings your sales process together so your team can see every lead, every conversation, every next step, and every opportunity in one place.',
  pillars: [
    { label: 'Capture faster', icon: 'Zap' },
    { label: 'Follow up on time', icon: 'Clock' },
    { label: 'Stay organized', icon: 'LayoutGrid' },
    { label: 'Close with confidence', icon: 'Trophy' }
  ]
};

export const PRODUCT_OVERVIEW = {
  eyebrow: 'Product Overview',
  heading: 'Everything Your Sales Team Needs. Connected.',
  lead:
    'OneConnect gives your team the tools to manage the complete sales journey without switching between spreadsheets, notes, messages, and disconnected systems.'
};

export const MODULES = [
  {
    id: 'lead-management',
    label: 'Lead Management',
    icon: 'Target',
    heading: 'Keep Your Pipeline Clean. Focus Sales on High-Intent Buyers.',
    description:
      'Bring your leads into one place, assign ownership, track their progress, and make sure every prospect has a clear next action.',
    features: [
      'Centralise lead information',
      'Assign leads to sales reps',
      'Track lead status and activity',
      'Organise follow-ups',
      'Maintain complete prospect history'
    ],
    kicker: 'No more leads disappearing between systems.'
  },
  {
    id: 'sales-pipeline',
    label: 'Sales Pipeline',
    icon: 'GitBranch',
    heading: 'See Exactly Where Every Deal Stands',
    description:
      'Get a clear visual view of your opportunities from the moment they enter your pipeline to the moment they close. Know which deals are moving, which ones are slowing down, and where your team should focus next.',
    features: [
      'Track opportunities by stage',
      'Monitor deal progress',
      'Identify stalled opportunities',
      'Prioritize high-value deals',
      'Maintain real-time pipeline visibility'
    ],
    kicker: 'Turn your pipeline into something your team can act on.'
  },
  {
    id: 'follow-up-management',
    label: 'Follow-Up Management',
    icon: 'BellRing',
    heading: 'Never Let a Good Opportunity Go Cold',
    description:
      'The difference between an interested prospect and a lost opportunity is often one missed follow-up. OneConnect keeps upcoming activities and next steps visible so your sales team knows exactly who needs attention and when.',
    features: [
      'Upcoming activities always visible',
      'Clear next steps per prospect',
      'Know who needs attention and when'
    ],
    kicker: 'One missed follow-up should never cost you a deal.'
  },
  {
    id: 'customer-management',
    label: 'Customer Management',
    icon: 'Users',
    heading: 'Every Customer Conversation Starts With Context',
    description:
      'Give your team one complete view of each customer. Keep contact information, activities, conversations, opportunities, notes, and relationship history connected so salespeople can understand the customer before every interaction.',
    features: [
      'Contact information and account details',
      'Activities and conversations',
      'Opportunities and notes',
      'Complete relationship history'
    ],
    kicker: 'One customer. One record. One complete story.'
  },
  {
    id: 'automation',
    label: 'Automation',
    icon: 'Workflow',
    heading: 'Automate the Routine. Focus on the Sale.',
    description:
      'Your salespeople should spend their time talking to customers, not managing repetitive CRM tasks. OneConnect helps automate everyday sales activities so your process keeps moving without creating more administrative work.',
    automations: [
      { title: 'Automate Lead Assignment', detail: 'Send new opportunities to the right salesperson.' },
      { title: 'Automate Follow-Up Reminders', detail: 'Keep important next steps from being forgotten.' },
      { title: 'Automate Sales Workflows', detail: 'Create consistency across your sales process.' },
      { title: 'Automate Routine Activities', detail: 'Reduce manual work and give your team more time to sell.' }
    ],
    features: [
      'Automate lead assignment',
      'Automate follow-up reminders',
      'Automate sales workflows',
      'Automate routine activities'
    ],
    kicker: 'Less CRM work. More customer conversations.'
  },
  {
    id: 'sales-management',
    label: 'Sales Management',
    icon: 'LineChart',
    heading: 'See Your Sales Team Without Chasing Updates',
    description:
      "You shouldn't need another meeting just to understand what's happening in sales. OneConnect gives managers a clear view of leads, activities, opportunities, and pipeline movement so they can identify where attention is needed.",
    features: [
      'New leads entering the business',
      'Opportunities currently in progress',
      'Deals moving between stages',
      'Follow-ups and sales activities',
      'Team activity',
      'Pipeline performance',
      'Opportunities that need attention'
    ],
    kicker: "Know what's happening. Know where to focus."
  },
  {
    id: 'reporting',
    label: 'Reporting',
    icon: 'BarChart3',
    heading: 'Turn Sales Activity Into Better Decisions',
    description:
      'Get a clearer picture of how your sales operation is performing. Use CRM data to understand your pipeline, monitor activity, identify bottlenecks, and make informed decisions about where your team should focus next.',
    features: [
      'Understand your pipeline',
      'Monitor sales activity',
      'Identify bottlenecks',
      'Decide where the team should focus next'
    ],
    kicker: 'Less guessing. More visibility. Better decisions.'
  },
  {
    id: 'cloud-crm',
    label: 'Cloud CRM',
    icon: 'Cloud',
    heading: 'Your Sales Team Can Work From Anywhere',
    description:
      "Your customers don't stop doing business when your team leaves the office. OneConnect keeps your sales information accessible wherever business happens - at the office, on the road, with a customer, or working remotely.",
    features: [
      'Access from the office',
      'Access on the road',
      'Access in front of a customer',
      'Access while working remotely'
    ],
    kicker: 'Your customers move. Your CRM moves with you.'
  }
];

export const WHY_ONECONNECT = {
  eyebrow: 'Why OneConnect',
  heading: 'Most CRMs Feel Like Admin Work. OneConnect Helps You Sell.',
  lead:
    'Traditional CRMs are built to store records, forcing reps to spend hours manually logging updates and piecing together context. OneConnect removes the friction so your team can focus on closing deals.',
  reasons: [
    {
      title: 'Full Context, Never Blank Records',
      detail:
        'Unlike tools that wipe history when a deal opens, OneConnect carries every prior email, call, and campaign interaction forward automatically.',
      icon: 'History'
    },
    {
      title: 'A Clean Pipeline, Not a Contact Dump',
      detail:
        'Cold contacts sit in a separate Discover stage until they qualify, keeping your pipeline focused only on sales-ready buyers.',
      icon: 'Filter'
    },
    {
      title: 'Native Calling & WhatsApp',
      detail:
        'No third-party tab juggling. Built-in 3CX, Amazon Connect, and WhatsApp log calls and track engagement directly within the customer record.',
      icon: 'PhoneCall'
    },
    {
      title: 'Clear Next Actions',
      detail:
        'Skip the guesswork. OneConnect surfaces who needs attention, which deals are cooling off, and what step comes next.',
      icon: 'Compass'
    },
    {
      title: 'Seamless Post-Sales Handoff',
      detail:
        'Closed-won deals convert straight into project milestones, keeping every promise made during the sale intact for delivery.',
      icon: 'Handshake'
    }
  ]
};

export const COMPARISON = {
  eyebrow: 'Comparison',
  heading: 'Replace Sales Chaos With a Clear Process',
  without: [
    'Leads spread across spreadsheets and inboxes',
    'Follow-ups dependent on memory',
    'Customer history difficult to find',
    'Managers constantly asking for updates',
    'Pipeline visibility always outdated',
    'Opportunities slipping through the cracks'
  ],
  with: [
    '100% Lead Ownership',
    'Zero Dropped Leads',
    'Full Context at Hand',
    'Real-Time Forecasting',
    'A Single Sales Playbook',
    'Managers have real-time visibility'
  ]
};

export const GROWTH_STAGE = {
  eyebrow: 'Who It Is For',
  heading: 'Built for Your Growth Stage',
  audiences: [
    {
      title: 'Sales Teams',
      detail: 'Manage leads, customers, follow-ups, and opportunities from one place.',
      icon: 'Users'
    },
    {
      title: 'Sales Managers',
      detail: 'Get visibility into pipeline movement and team activity.',
      icon: 'ClipboardCheck'
    },
    {
      title: 'Field Sales Teams',
      detail: 'Stay connected to customer information wherever business happens.',
      icon: 'MapPin'
    },
    {
      title: 'Growing Businesses',
      detail: 'Build a consistent sales process before growth creates complexity.',
      icon: 'TrendingUp'
    },
    {
      title: 'Business Owners',
      detail: 'See what’s happening across sales without depending on manual reports.',
      icon: 'Briefcase'
    }
  ]
};

export const HOW_IT_WORKS = {
  eyebrow: 'How It Works',
  heading: 'A Clear Path From Lead to Customer',
  steps: [
    { no: '01', title: 'Capture', detail: 'Bring every new lead into OneConnect.', icon: 'Inbox' },
    { no: '02', title: 'Assign', detail: 'Make ownership clear from the beginning.', icon: 'UserCheck' },
    { no: '03', title: 'Engage', detail: 'Track conversations, activities, and customer information.', icon: 'MessagesSquare' },
    { no: '04', title: 'Follow Up', detail: 'Keep every next action visible.', icon: 'BellRing' },
    { no: '05', title: 'Progress', detail: 'Move opportunities through your pipeline.', icon: 'GitBranch' },
    {
      no: '06',
      title: 'Close',
      detail: 'Turn opportunities into customers while keeping the complete relationship history intact.',
      icon: 'Trophy'
    }
  ]
};

export const POSITIONING = {
  eyebrow: 'Positioning',
  heading: 'Your CRM Should Tell Your Team What to Do Next',
  lines: [
    "A CRM shouldn't simply store names, phone numbers, and deals.",
    "It should help your salespeople understand. That's what OneConnect is built to do."
  ],
  kicker: 'Turn sales information into sales action.',
  // Illustrative nudges - they demonstrate the claim rather than restate it.
  actions: [
    { rank: '1', title: 'Call Northline Logistics', reason: 'Follow-up promised for today' },
    { rank: '2', title: 'Re-engage Vertex Manufacturing', reason: 'No activity for 9 days' },
    { rank: '3', title: 'Send contract to Meridian Health', reason: 'Proposal accepted yesterday' }
  ],
  actionsLabel: 'Your next actions',
  actionsFootnote: 'Ranked from live pipeline activity, not a to-do list someone typed out.'
};

export const TESTIMONIALS = {
  eyebrow: 'Testimonials',
  heading: 'What Sales Teams Say About OneConnect',
  // Copy deck lists this section without quotes yet - these are labelled
  // placeholders, ready to be swapped for approved customer quotes.
  placeholderCount: 3,
  note: 'Customer stories are being collected and will appear here once approved.',
  ctaLine: 'Using OneConnect already?',
  ctaButton: 'Share your story'
};

export const FAQ = {
  eyebrow: 'FAQ',
  heading: 'Everything You Need to Know About OneConnect',
  items: [
    {
      q: 'What is OneConnect?',
      a: 'OneConnect is a cloud-based CRM designed to help businesses manage leads, customers, sales activities, follow-ups, and opportunities throughout the sales pipeline.'
    },
    {
      q: 'What can my sales team manage with OneConnect?',
      a: 'Your team can manage leads, customer information, sales activities, follow-ups, opportunities, and pipeline progress from one connected CRM.'
    },
    {
      q: 'Who should use OneConnect?',
      a: 'OneConnect is suitable for sales teams, sales managers, field teams, growing businesses, and organizations that want a more structured way to manage their sales process.'
    },
    {
      q: 'How does OneConnect help with lead management?',
      a: 'OneConnect gives your team one place to organize leads, assign ownership, track activity, manage follow-ups, and move prospects through the sales process.'
    },
    {
      q: 'Can managers track the sales pipeline?',
      a: 'Yes. OneConnect gives managers visibility into opportunities, deal stages, sales activities, and pipeline movement so they can see where attention is needed.'
    },
    {
      q: 'Is OneConnect cloud-based?',
      a: 'Yes. OneConnect is cloud-based, allowing your team to access sales and customer information from wherever they work.'
    }
  ]
};

export const FINAL_CTA = {
  heading: 'One CRM. Your Entire Sales Pipeline.',
  lines: [
    'Bring your leads, customers, follow-ups, activities, and opportunities into one connected sales process.',
    "Give your team a clearer way to work - and your business a clearer view of what's happening."
  ]
};

export const FOOTER = {
  brand: 'OneConnect',
  tagline: 'From first lead to closed deal, keep everything connected.'
};
