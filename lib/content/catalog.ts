export type ContentItem = {
  title: string;
  description: string;
  href: string;
  category: string;
  contentType: "story" | "guide";
  readTime: string;
  featured?: boolean;
  homepage?: boolean;
  priority: number;
};

export const realMoneyStories: ContentItem[] = [
  {
    title:
      "He Hadn't Filed Taxes in Nearly Eight Years — and Was Afraid to Find Out What He Owed",
    description:
      "Years of avoidance created growing fear before one taxpayer decided to confront his unfiled returns.",
    href: "/blog/real-money-stories/not-filed-taxes-nearly-eight-years",
    category: "Tax filing",
    contentType: "story",
    readTime: "8 min read",
    featured: true,
    homepage: true,
    priority: 100,
  },
  {
    title:
      "Her W-2 Was Wrong — Her Employer Still Hadn't Fixed It as Tax Day Got Closer",
    description:
      "An employee repeatedly requested a correction while the filing deadline continued approaching.",
    href: "/blog/real-money-stories/wrong-w2-employer-not-correcting",
    category: "Incorrect W-2",
    contentType: "story",
    readTime: "7 min read",
    homepage: true,
    priority: 95,
  },
  {
    title:
      "She Was Taxed in the Wrong State — Then Payroll Said It Couldn't Fix the Problem",
    description:
      "A payroll-location problem created questions about withholding, state returns and W-2 information.",
    href: "/blog/real-money-stories/taxed-in-wrong-state-payroll-problem",
    category: "Payroll and state tax",
    contentType: "story",
    readTime: "8 min read",
    homepage: true,
    priority: 90,
  },
  {
    title: "His Tax Return Was Accepted — Then He Realized He Left Out a W-2",
    description:
      "After discovering another W-2, a taxpayer needed to understand how an accepted return could be corrected.",
    href: "/blog/real-money-stories/return-accepted-forgot-w2",
    category: "Amended tax return",
    contentType: "story",
    readTime: "6 min read",
    homepage: true,
    priority: 85,
  },
  {
    title:
      "His Former Employer Reported $30,000 More Income Than He Expected — Then the IRS Letter Arrived",
    description:
      "The income connected with an IRS notice appeared much higher than the W-2 in his records.",
    href: "/blog/real-money-stories/employer-reported-30000-more-income",
    category: "Income reporting",
    contentType: "story",
    readTime: "8 min read",
    homepage: true,
    priority: 80,
  },
  {
    title:
      "She Made About $55,000 as a 1099 Contractor — Then She Saw an $8,000 Tax Bill",
    description:
      "A contractor was surprised when tax software showed a substantial estimated balance after self-employment income.",
    href: "/blog/real-money-stories/55000-1099-8000-tax-bill",
    category: "Self-employment tax",
    contentType: "story",
    readTime: "7 min read",
    priority: 75,
  },
  {
    title:
      "The IRS Said He Owed $20,000 — But He Says He Was Still in High School",
    description:
      "A publicly shared taxpayer experience began with an IRS notice for a tax year the individual said made little sense.",
    href: "/blog/real-money-stories/irs-said-he-owed-20000-high-school",
    category: "IRS notice",
    contentType: "story",
    readTime: "7 min read",
    priority: 70,
  },
];

export const financialGuides: ContentItem[] = [
  {
    title: "How Much Is $70,000 After Taxes?",
    description:
      "See how federal taxes and payroll deductions may affect annual and paycheck-level take-home pay.",
    href: "/blog/how-much-is-70000-after-taxes",
    category: "Taxes",
    contentType: "guide",
    readTime: "7 min read",
    featured: true,
    homepage: true,
    priority: 100,
  },
  {
    title: "$25 an Hour Is How Much a Year?",
    description:
      "Convert an hourly wage into annual, monthly, biweekly and weekly gross income.",
    href: "/blog/25-an-hour-is-how-much-a-year",
    category: "Income",
    contentType: "guide",
    readTime: "6 min read",
    featured: true,
    homepage: true,
    priority: 95,
  },
  {
    title: "What Is the Monthly Payment on a $300,000 Mortgage?",
    description:
      "Understand how interest, property taxes and insurance may affect the full monthly payment.",
    href: "/blog/300000-mortgage-payment",
    category: "Housing",
    contentType: "guide",
    readTime: "7 min read",
    featured: true,
    homepage: true,
    priority: 90,
  },
  {
    title: "How Much Is $100,000 After Taxes?",
    description:
      "Estimate how a $100,000 salary may translate into annual, monthly and paycheck-level take-home pay.",
    href: "/blog/how-much-is-100000-after-taxes",
    category: "Salary After Tax",
    contentType: "guide",
    readTime: "7 min read",
    priority: 85,
  },
  {
    title: "$30 an Hour Is How Much a Year?",
    description:
      "Estimate annual, monthly, weekly and biweekly gross income at $30 per hour.",
    href: "/blog/30-an-hour-is-how-much-a-year",
    category: "Hourly Wage",
    contentType: "guide",
    readTime: "6 min read",
    priority: 80,
  },
  {
    title: "What Is the Monthly Payment on a $400,000 Mortgage?",
    description:
      "Explore principal, interest, property taxes, insurance and possible PMI on a $400,000 mortgage.",
    href: "/blog/400000-mortgage-payment",
    category: "Mortgage",
    contentType: "guide",
    readTime: "7 min read",
    priority: 75,
  },
  {
    title: "Gross Pay vs Net Pay: What Is the Difference?",
    description:
      "Learn how taxes and payroll deductions create the difference between gross and take-home pay.",
    href: "/blog/gross-pay-vs-net-pay",
    category: "Paycheck",
    contentType: "guide",
    readTime: "6 min read",
    priority: 70,
  },
  {
    title: "How to Estimate Your Take-Home Pay",
    description:
      "Learn what affects a paycheck and how to estimate net pay after taxes and deductions.",
    href: "/blog/how-to-estimate-take-home-pay",
    category: "Paycheck",
    contentType: "guide",
    readTime: "8 min read",
    priority: 65,
  },
  {
    title: "APR vs Interest Rate: What Borrowers Should Know",
    description:
      "Understand the difference between APR and interest rate when comparing borrowing costs.",
    href: "/blog/apr-vs-interest-rate",
    category: "Loans",
    contentType: "guide",
    readTime: "6 min read",
    priority: 60,
  },
  {
    title: "How Much House Can I Afford?",
    description:
      "Learn how income, debt, down payment and mortgage rates may affect home affordability.",
    href: "/blog/how-much-house-can-i-afford",
    category: "Mortgage",
    contentType: "guide",
    readTime: "8 min read",
    priority: 55,
  },
  {
    title: "Mortgage Payment Basics for First-Time Buyers",
    description:
      "Understand principal, interest, property tax, insurance and other common homeownership costs.",
    href: "/blog/mortgage-payment-basics",
    category: "Mortgage",
    contentType: "guide",
    readTime: "8 min read",
    priority: 50,
  },
  {
    title: "How to Pay Off Credit Card Debt Faster",
    description:
      "Learn how APR, monthly payments and additional contributions affect debt payoff time.",
    href: "/blog/pay-off-credit-card-debt-faster",
    category: "Debt",
    contentType: "guide",
    readTime: "7 min read",
    priority: 45,
  },
  {
    title: "Rent vs Buy: Key Factors to Consider",
    description:
      "Compare housing duration, ownership costs, flexibility and other important rent-versus-buy factors.",
    href: "/blog/rent-vs-buy-key-factors",
    category: "Home Buying",
    contentType: "guide",
    readTime: "8 min read",
    priority: 40,
  },
  {
    title: "How Compound Growth Affects Retirement Savings",
    description:
      "See how time, contributions and assumed investment returns can affect long-term retirement savings.",
    href: "/blog/compound-growth-retirement-savings",
    category: "Retirement",
    contentType: "guide",
    readTime: "7 min read",
    priority: 35,
  },
];

export const allBlogContent = [...realMoneyStories, ...financialGuides].sort(
  (a, b) => b.priority - a.priority,
);

export const homepageStories = realMoneyStories
  .filter((item) => item.homepage)
  .sort((a, b) => b.priority - a.priority)
  .slice(0, 5);

export const homepageGuides = financialGuides
  .filter((item) => item.homepage)
  .sort((a, b) => b.priority - a.priority)
  .slice(0, 3);
