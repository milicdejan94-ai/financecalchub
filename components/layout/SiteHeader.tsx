"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const calculatorGroups = [
  {
    title: "Income and payroll",
    links: [
      { label: "Paycheck Calculator", href: "/calculators/paycheck" },
      { label: "Paycheck by State", href: "/paycheck-calculator" },
      { label: "Salary Calculator", href: "/salary-calculator" },
      { label: "Salary After Tax", href: "/salary-after-tax" },
      { label: "Hourly Wage", href: "/hourly-wage" },
    ],
  },
  {
    title: "Housing and loans",
    links: [
      { label: "Mortgage Calculator", href: "/calculators/mortgage" },
      {
        label: "Mortgage Affordability",
        href: "/calculators/mortgage-affordability",
      },
      { label: "Mortgage by Amount", href: "/mortgage-payment" },
      { label: "Loan Calculator", href: "/calculators/loan" },
      { label: "Rent vs Buy", href: "/calculators/rent-vs-buy" },
    ],
  },
  {
    title: "Saving and debt",
    links: [
      { label: "Debt Payoff", href: "/calculators/debt-payoff" },
      {
        label: "Credit Card Payoff",
        href: "/calculators/credit-card-payoff",
      },
      {
        label: "Compound Interest",
        href: "/calculators/compound-interest",
      },
      { label: "Retirement", href: "/calculators/retirement" },
      { label: "401(k) Calculator", href: "/calculators/401k" },
    ],
  },
];

const learnLinks = [
  { label: "Taxes and payroll", href: "/blog/how-to-estimate-take-home-pay" },
  { label: "Income and salary", href: "/blog/gross-pay-vs-net-pay" },
  { label: "Housing and mortgages", href: "/blog/mortgage-payment-basics" },
  { label: "Debt and credit", href: "/blog/pay-off-credit-card-debt-faster" },
  { label: "Investing for beginners", href: "/investing" },
  {
    label: "Retirement and savings",
    href: "/blog/compound-growth-retirement-savings",
  },
];

const storyLinks = [
  {
    label: "Latest Real Money Stories",
    href: "/blog/real-money-stories",
  },
  {
    label: "$55,000 contractor tax bill",
    href: "/blog/real-money-stories/55000-1099-8000-tax-bill",
  },
  {
    label: "Eight years of unfiled taxes",
    href: "/blog/real-money-stories/not-filed-taxes-nearly-eight-years",
  },
  {
    label: "Wrong state payroll tax",
    href: "/blog/real-money-stories/taxed-in-wrong-state-payroll-problem",
  },
  {
    label: "Employer would not fix W-2",
    href: "/blog/real-money-stories/wrong-w2-employer-not-correcting",
  },
];

export default function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("portal-menu-open", mobileOpen);

    return () => {
      document.body.classList.remove("portal-menu-open");
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="portal-site-header">
        <div className="container portal-header-inner">
          <Link
            href="/"
            className="portal-header-logo"
            aria-label="FinanceCalcHub homepage"
          >
            FinanceCalcHub
          </Link>

          <nav className="portal-desktop-nav" aria-label="Primary navigation">
            <div className="portal-nav-dropdown portal-nav-dropdown-wide">
              <button type="button" className="portal-nav-trigger">
                Calculators
                <span aria-hidden="true">⌄</span>
              </button>

              <div className="portal-dropdown-panel portal-mega-menu">
                <div className="portal-mega-menu-intro">
                  <span>Financial tools</span>
                  <strong>Calculate common money decisions.</strong>
                  <p>
                    Free educational estimates for income, taxes, housing, debt,
                    savings and investing.
                  </p>

                  <Link href="/calculators">View all calculators →</Link>
                </div>

                {calculatorGroups.map((group) => (
                  <div className="portal-dropdown-group" key={group.title}>
                    <strong>{group.title}</strong>

                    {group.links.map((link) => (
                      <Link href={link.href} key={link.href}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="portal-nav-dropdown">
              <button type="button" className="portal-nav-trigger">
                Stories
                <span aria-hidden="true">⌄</span>
              </button>

              <div className="portal-dropdown-panel portal-dropdown-list">
                <span className="portal-dropdown-label">
                  Real Money Stories
                </span>

                {storyLinks.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="portal-nav-dropdown">
              <button type="button" className="portal-nav-trigger">
                Learn
                <span aria-hidden="true">⌄</span>
              </button>

              <div className="portal-dropdown-panel portal-dropdown-list">
                <span className="portal-dropdown-label">
                  Financial education
                </span>

                {learnLinks.map((link) => (
                  <Link href={link.href} key={link.href}>
                    {link.label}
                  </Link>
                ))}

                <Link href="/blog" className="portal-dropdown-feature-link">
                  Browse all guides →
                </Link>
              </div>
            </div>

            <Link href="/mortgage-payment">Housing</Link>
            <Link href="/investing">Investing</Link>
            <Link href="/blog">Blog</Link>
          </nav>

          <div className="portal-header-actions">
            <Link
              href="/blog/real-money-stories"
              className="portal-header-stories-link"
            >
              Latest stories
            </Link>

            <button
              type="button"
              className="portal-mobile-menu-button"
              aria-expanded={mobileOpen}
              aria-controls="portal-mobile-menu"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((current) => !current)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div
        className={`portal-mobile-overlay ${
          mobileOpen ? "portal-mobile-overlay-open" : ""
        }`}
        onClick={closeMobileMenu}
        aria-hidden="true"
      />

      <aside
        id="portal-mobile-menu"
        className={`portal-mobile-panel ${
          mobileOpen ? "portal-mobile-panel-open" : ""
        }`}
        aria-hidden={!mobileOpen}
      >
        <div className="portal-mobile-panel-header">
          <Link href="/" onClick={closeMobileMenu}>
            FinanceCalcHub
          </Link>

          <button
            type="button"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>

        <nav className="portal-mobile-nav" aria-label="Mobile navigation">
          <Link href="/" onClick={closeMobileMenu}>
            Home
          </Link>

          <details>
            <summary>
              Calculators
              <span>+</span>
            </summary>

            <div className="portal-mobile-submenu">
              <Link href="/calculators" onClick={closeMobileMenu}>
                All calculators
              </Link>
              <Link href="/calculators/paycheck" onClick={closeMobileMenu}>
                Paycheck calculator
              </Link>
              <Link href="/paycheck-calculator" onClick={closeMobileMenu}>
                Paycheck by state
              </Link>
              <Link href="/calculators/mortgage" onClick={closeMobileMenu}>
                Mortgage calculator
              </Link>
              <Link href="/calculators/debt-payoff" onClick={closeMobileMenu}>
                Debt payoff
              </Link>
              <Link href="/calculators/retirement" onClick={closeMobileMenu}>
                Retirement calculator
              </Link>
            </div>
          </details>

          <details>
            <summary>
              Real Money Stories
              <span>+</span>
            </summary>

            <div className="portal-mobile-submenu">
              {storyLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>

          <details>
            <summary>
              Learn
              <span>+</span>
            </summary>

            <div className="portal-mobile-submenu">
              {learnLinks.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  onClick={closeMobileMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </details>

          <Link href="/mortgage-payment" onClick={closeMobileMenu}>
            Housing
          </Link>

          <Link href="/investing" onClick={closeMobileMenu}>
            Investing
          </Link>

          <Link href="/blog" onClick={closeMobileMenu}>
            Blog
          </Link>
        </nav>

        <div className="portal-mobile-secondary-links">
          <Link href="/about" onClick={closeMobileMenu}>
            About
          </Link>
          <Link href="/methodology" onClick={closeMobileMenu}>
            Methodology
          </Link>
          <Link href="/editorial-policy" onClick={closeMobileMenu}>
            Editorial Policy
          </Link>
        </div>
      </aside>
    </>
  );
}
