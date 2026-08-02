# Privacy Site · Services & Opinions Reference

Working doc mirroring the live `tools/*.html` pages: every category, every service, and the review/opinion text currently published for it. This is the source of truth the HTML pages are kept in sync with.

## Contents

- **Network & Browsing**
  - [Browsers & Search](#browsers--search)
  - [DNS & Network](#dns--network)
  - [VPNs](#vpns)
  - [Anonymizing Networks](#anonymizing-networks)
- **Credentials & Identity**
  - [Password Managers](#password-managers)
  - [2FA & Hardware Keys](#2fa--hardware-keys)
  - [Alias Services](#alias-services)
  - [Personal Data Removers](#personal-data-removers)
- **Communication**
  - [Messengers](#messengers)
  - [Email Providers](#email-providers)
  - [Social Media](#social-media)
  - [Communities](#communities)
  - [Frontends](#frontends)
- **Data & Files**
  - [Cloud Storage & Sync](#cloud-storage--sync)
  - [Notes](#notes)
  - [File Sharing](#file-sharing)
  - [Office Suites](#office-suites)
  - [Encryption](#encryption)
- **Platforms**
  - [Mobile OS](#mobile-os)
  - [Desktop OS](#desktop-os)
- **Money & Connectivity**
  - [Financial Services](#financial-services)
  - [Cellular Services](#cellular-services)
- **Other**
  - [AI Tools](#ai-tools)
  - [Maps](#maps)
  - [Resources](#resources)

---

## Network & Browsing

### Browsers & Search

> Your browser sees everything you do online, which makes it the single biggest privacy decision on a normal computer. The good news: the right pick works out of the box: no extension pile, no settings safari.

**before you pick:** More hardening is not automatically better. Aggressive fingerprinting protection breaks sites, and a heavily customized browser can be more identifiable, not less. Pick the tier of friction you'll actually live with: a private browser you abandon after a week protects nothing.

**What matters here:**
- **tracking protection by default**: Blocking trackers and third-party cookies out of the box, not buried behind flags or an extension you have to know to install.
- **fingerprinting resistance**: Trackers don't need cookies if your browser's configuration is unique. Resisting that matters more every year.
- **engine security**: Chromium is more battle-tested and extensively vetted than Gecko: a flat security reality that privacy circles often wave away. The monoculture concern is real too; it's just a different axis.
- **update cadence**: Browsers are the most attacked software you run. Fast security updates beat any privacy tweak.

#### Recommendations

##### Brave · *the default pick*

`chromium` · `open source` · `ad blocking` · `anti-fingerprinting` · `free`

A direct Chromium derivative (not a fork) which keeps it close to upstream and gives it a genuine security edge over Gecko-based alternatives. What it ships matters: aggressive first-party ad and tracker blocking baked in, one of the most robust anti-fingerprinting implementations in any mainstream browser, and a shields system that needs no separate extension layer. The "crypto browser" criticism is lazy: BAT rewards are entirely opt-in and gone in under a minute, which is functionally no different from Mozilla shipping Pocket, sponsored shortcuts, or that Mr. Robot extension nobody asked for. The double standard deserves calling out.

Brave Origin answers the bloat argument outright: a variant that strips all non-privacy/security-essential features and hard-disables them rather than hiding them behind toggles. One-time ~$59.99 on Windows and macOS, free on Linux, the cleanest version of an already strong browser at no cost if you're on the right OS.

**Good:**
- Strong blocking and fingerprint randomization with zero setup
- Chromium's security posture and site compatibility
- Origin variant: minimalist build, features hardware-disabled, free on Linux
- Brave Search integration: an independent index by default

**Mind the:**
- Chromium monoculture is a legitimate systemic concern, ideologically
- Rewards/wallet clutter in the standard build, switch it off first thing
- Origin's licence check uses a blind-token protocol (Privacy Pass): architecturally sound, but it is one more trust layer worth knowing about

free · Origin ~$59.99 one-off (free on linux) · [brave.com →](https://brave.com)

##### Firefox · *the gecko pick*

`gecko` · `open source` · `free`

Still a valid alternative for people who genuinely need Gecko: the full extension ecosystem (including unrestricted uBlock Origin), certain enterprise compatibility, or an ideological preference against the Chromium monoculture. Be honest about the work, though: out of the box it isn't competitive on privacy, and needs hardening (arkenfox user.js or a pre-hardened build like LibreWolf) plus telemetry and sponsored content switched off.

**Good:**
- The last serious non-Chromium engine: a vote against the monoculture
- Unrestricted extensions, including full uBlock Origin
- Container tabs separate work / personal / shopping identities
- Deeply configurable for those willing to do the work

**Mind the:**
- Requires hardening to match what Brave does by default
- Telemetry and sponsored tiles ship enabled
- Gecko sees less security scrutiny than Chromium, the uncomfortable flip side of engine diversity
- Mozilla's funding still mostly comes from Google's search deal

free · [mozilla.org →](https://www.mozilla.org/firefox/)

##### Helium · *the one to watch*

`chromium` · `open source` · `ad blocking` · `no account` · `free`

A lean open-source Chromium browser built on ungoogled-chromium by a small team (imput). Strong privacy defaults: Google services removed, trackers and third-party cookies blocked out of the box, and the attack surface kept small by deliberately omitting sync, a built-in password manager, and DRM. Still in beta with limited auto-update on some platforms, not a daily-driver replacement yet, but genuinely interesting for purists who want even less than Brave Origin.

**Good:**
- Privacy-by-omission: less shipped means less to audit and less to leak
- Google services removed at the ungoogled-chromium level
- Blocking on by default, no account, no monetization angle

**Mind the:**
- Beta software from a small team, treat it accordingly
- Limited auto-update on some platforms is a real security cost
- No DRM means no Netflix and friends; no sync means you're the sync

free · [helium.computer →](https://helium.computer)

##### Mullvad Browser · *recommended secondary*

`gecko` · `anti-fingerprinting` · `open source` · `free`

Built by Mullvad in partnership with the Tor Project, using the same hardened Firefox base as Tor Browser but without the Tor network attached. The strategy is different from most "private browser" pitches: it doesn't try to make you unique, it tries to make you identical to every other Mullvad Browser user: a shared, locked-down fingerprint is far stronger anti-tracking than per-user randomization. Pairs naturally with Mullvad VPN for matched infrastructure, but works perfectly well with no VPN at all, which is why it's a secondary pick rather than a daily driver.

**Good:**
- Uniform fingerprint by design: strong defense against tracking, not just blocking
- Built and maintained by two organizations with real anti-surveillance track records
- Doesn't require Mullvad VPN or any subscription

**Mind the:**
- Aggressive hardening breaks some sites, expect occasional friction
- No extensions ecosystem to speak of; that's deliberate, not a bug
- Best as a secondary browser for sensitive browsing, not everyday use

free · [mullvad.net/browser →](https://mullvad.net/browser)

##### Vivaldi · *the power-user pick*

`chromium` · `ad blocking` · `customizable` · `free`

A Chromium browser built around customization first, privacy second: tab stacking, panels, a built-in mail client, and more interface options than almost anything else on the market. It ships built-in tracker and ad blocking, which puts it ahead of stock Chromium and most Chromium forks that ship nothing, but it's more feature-dense and mainstream than it is privacy-first by design. A reasonable pick for someone who wants Chromium's compatibility and a genuinely useful blocker, with heavy customization as the main draw rather than minimizing footprint.

**Good:**
- Tracker and ad blocking on by default, no extension required
- Extremely configurable UI: tab stacking, panels, custom shortcuts
- Chromium compatibility and update cadence
- No Google account ties; independent Norwegian company

**Mind the:**
- Feature-dense by design: more surface area than a minimalist browser
- Fingerprinting resistance is weaker than Brave or Mullvad Browser
- Still Chromium under the hood, with the same monoculture trade-off

free · [vivaldi.com →](https://vivaldi.com)

##### LibreWolf · *secondary, research-grade*

`gecko` · `open source` · `free`

LibreWolf is Firefox with arkenfox-style hardening baked in before you ever open it: aggressive fingerprinting resistance, telemetry stripped, trackers blocked by default. The honest take: **this is not recommended as a daily driver**. The hardening that makes it strong also breaks sites more often than most people will put up with day to day. Updates have closed the gap with Firefox proper (patches now typically land within days of upstream), though the structural risk remains: a smaller team with no centralized telemetry feedback loop. It's better used as a secondary, research-grade browser than an everyday one.

**Good:**
- Aggressive fingerprinting resistance and tracker blocking out of the box
- Telemetry and sponsored content stripped before first launch
- Patch cadence now typically within days of upstream Firefox

**Mind the:**
- No automatic updates: applying patches needs manual action or a package manager
- Disables Safe Browsing by default, removing Firefox's malware/phishing blocklist (re-enable manually)
- Inherits Gecko's weaker sandboxing and site isolation versus Chromium
- Small volunteer team, no staffed security org or telemetry feedback loop

free · [librewolf.net →](https://librewolf.net)

#### Search engines

- **Brave Search as primary.** It runs an independent index (not a reskinned Bing or Google feed), which puts it in a different category from most "private" search engines. Result quality is competitive and well past the rising-star phase. It's the default in Brave already; in other browsers it's two clicks to set.
- **Startpage as secondary.** Proxied Google results plus the Anonymous View feature: the pragmatic answer when you need Google's retrieval quality without the direct relationship. Caveat: it's owned by System1, an ad-tech company. Fine as a secondary with clear utility; not architecturally trustworthy enough for a primary.
- **Qwant if you want a second independent index.** French, partial own index, GDPR jurisdiction, credible privacy stance. Not as robust as Brave Search, but a reasonable European-backed rotation option.
- **DuckDuckGo, with eyes open.** Usable and easy, but it's primarily Bing-backed and structurally inherits Bing's limitations. In 2022 its CEO publicly endorsed down-ranking sites associated with Russian disinformation; much of the mechanism came from Microsoft's own policy changes, but the endorsement was DDG's. If you can't control your index, you can't fully control your results. Acceptable for casual use; don't treat it as neutral.
- **Kagi if you'll pay to opt out of the ad economy entirely.** A paid, no-ads, no-tracking search engine with independent ranking signals: the subscription funds the business directly instead of your data or attention doing it indirectly. Worth it for anyone who treats search quality as a tool budget rather than something that has to be free.
- **SearXNG for a self-hostable, no-account option.** An open-source metasearch engine that aggregates results from other engines (Google, Bing, Brave Search, and more) without forwarding your identity to any of them. Run your own instance for full control, or use one of the many public instances if you trust the operator. No tracking either way.

#### More browsers worth knowing

- **Floorp**, a Firefox-based fork aimed at privacy and research use, with workspaces, vertical tabs, and a set of hardening tweaks applied out of the box. A reasonable middle ground for someone who wants more than stock Firefox without doing the arkenfox work themselves, though it carries the same smaller-team maintenance risk every Firefox fork does.
- **Orion**, a WebKit-based browser built by Kagi around privacy, notable for supporting both Chrome and Firefox extensions despite running a different engine entirely. Stable on macOS and iOS, with a Linux beta now available and Windows in development. Closed source, unlike most of this list; free, with an optional paid Orion+ tier for extras. Extension support is good but not complete yet, especially on iOS.

#### Worth knowing

- **On Brave, skip the extension pile entirely.** Shields already cover what most "privacy extensions" claim to do, and every extra extension makes you more fingerprintable. On Firefox, install exactly one: uBlock Origin. Gecko still runs it unrestricted, unlike Chromium's Manifest V3 limits (which don't affect Brave's native shields). This applies everywhere, not just Brave and Firefox: uBlock Origin is the one extension worth installing, and piling on more "privacy" extensions on top of it tends to make you more identifiable, not less; each one adds another fingerprintable signature to your browser's configuration.
- **First-run checklist for Brave:** settings → turn off Rewards, Wallet, and News if you don't want them. That's the whole de-clutter; shields and anti-fingerprinting are already on.
- **Private/incognito mode is not privacy.** It only stops local history. Your ISP, employer, DNS resolver, and the sites themselves see exactly the same traffic: that's what encrypted DNS and VPNs are about.
- **If you need actual anonymity, that's Tor Browser.** Nothing on this page hides who you are from a determined observer; these picks reduce tracking, they don't make you anonymous. Different problem, different tool.

---

### DNS & Network

> Every site you visit starts with a DNS lookup, and by default those lookups go to your ISP in plaintext. Switching to an encrypted, filtering resolver is a ten-minute change that upgrades every device on your network, blocking ads and malware before a connection is ever made.

**before you pick:** DNS filtering blocks requests at the name level: strong against trackers and malware domains, weaker against ads served first-party (YouTube's, for instance). It complements blocking in the browser; it doesn't replace it. And any third-party resolver requires trusting that party with your query log; self-hosting is the only way out of that trade.

**What matters here:**
- **encrypted transport**: DoH or DoT keeps lookups unreadable on the wire. Every pick here supports both; your OS or router does too.
- **logging policy**: The resolver sees every domain you visit. What it keeps, for how long, and under whose laws is the core question.
- **filtering control**: From fixed lists (zero effort) to fully custom rules per device. More control means more maintenance: pick your tier.
- **consistency with your tunnel**: If you run a VPN, your DNS should match its infrastructure: a mismatched resolver fragments your fingerprint and leaks intent.

#### Recommendations

##### AdGuard DNS · *the default pick*

`🇨🇾 cyprus` · `encrypted dns` · `ad blocking` · `free tier`

A practical, reliable encrypted resolver with strong blocking lists and the broadest device support in the category: the public resolver ( 94.140.14.14 ) blocks ads and trackers with zero setup and no account. Not fully open source server-side, but the company has a long, consistent track record in the security space, and its home-server sibling (AdGuard Home) is fully FOSS. Covers the majority of everyday use cleanly; the paid tier adds dashboards and custom rules.

**Good:**
- Ad and tracker blocking with no account needed
- Supports DoH, DoT, and newer DNS-over-QUIC
- Long-running company with an open-source culture
- Paid tier adds per-device profiles and custom rules

**Mind the:**
- Public tier keeps anonymized 24h logs for operations
- Server side isn't fully open source
- Cyprus jurisdiction is less battle-tested than Switzerland
- Founded in Moscow in 2009 before later relocating its HQ to Cyprus

public free · private from ~$3/mo · [adguard-dns.io →](https://adguard-dns.io)

##### Mullvad DNS · *the contextual pick*

`🇸🇪 sweden` · `encrypted dns` · `no logs` · `no account` · `free`

Mullvad's public resolver, free for everyone (not just VPN customers), with the same no-logs posture as the VPN and optional ad/tracker filtering endpoints. The headline use is consistency: when you're on Mullvad's VPN (or Tor), keeping DNS inside the same infrastructure preserves a uniform fingerprint instead of announcing a third party. It's been growing into a solid standalone recommendation as well.

**Good:**
- Clean no-logs policy from a raid-tested operator
- Filtering variants (ads, trackers, malware) selectable by hostname
- The right answer whenever Mullvad VPN is already in your stack

**Mind the:**
- Encrypted transport only: no plain port-53 fallback for dumb devices
- No dashboards, analytics, or per-device control at all
- Fixed lists; can't allowlist a single false positive

free · [mullvad.net →](https://mullvad.net/en/help/dns-over-https-and-dns-over-tls)

##### Quad9 · *the neutral pick*

`🇨🇭 switzerland` · `encrypted dns` · `no logs` · `nonprofit` · `free`

Set 9.9.9.9 and you're done: a Swiss nonprofit resolver that blocks malware domains, keeps no per-user logs, and asks nothing of you. It doesn't filter ads; it's a security resolver, not an ad blocker, which is exactly why it's worth knowing: a clean, trustworthy, threat-focused option when you want neutrality rather than curation.

**Good:**
- Nonprofit under Swiss privacy law: no commercial incentive to log
- Malware/phishing blocklist on by default
- Anycast network; fast nearly everywhere

**Mind the:**
- No ad/tracker filtering: pair with browser-level blocking
- No customization or per-device control at all
- Occasional false positives are hard to appeal quickly

free, nonprofit · [quad9.net →](https://quad9.net)

##### NextDNS · *the power-user pick*

`🇺🇸 usa` · `encrypted dns` · `customizable` · `free tier`

A Pi-hole in the cloud: pick your blocklists, see analytics per device, set parental controls, and carry the config everywhere your devices roam. The most filtering power you can get without hosting anything, with good logging-transparency options to match (retention is configurable, including to zero). More tool than appliance; budget the occasional evening of allowlisting.

**Good:**
- Granular blocklists, allowlists, and per-profile settings
- Works on the go: profiles follow your phone off the home network
- Configurable log retention and storage region, including none

**Mind the:**
- US company; logging is opt-out by configuration, not impossible by design
- Past the free quota (300k queries/mo) it stops filtering until you pay
- Easy to over-block and spend evenings whitelisting

free tier · ~$2/mo unlimited · [nextdns.io →](https://nextdns.io)

##### Self-host · *the self-host pick*

`self-hostable` · `open source` · `customizable` · `ad blocking` · `free`

Run your own filtering resolver on a Raspberry Pi or any always-on box, and no third party sees your lookups at all, the only complete answer to the trust question every entry above carries. AdGuard Home is the slicker, FOSS, encrypted-out-of-the-box option; Pi-hole is the decade-old community classic. Pair either with Unbound and you're not even trusting an upstream resolver.

**Good:**
- Your hardware, your rules, your logs (or none)
- Covers smart TVs and IoT junk that can't run blockers
- With Unbound upstream, fully independent recursive resolution
- AdGuard Home speaks DoH/DoT natively, both directions

**Mind the:**
- You're now a sysadmin: updates, uptime, and "the internet is broken" complaints are yours
- Only protects you at home unless you route back via WireGuard
- Needs an always-on device (~€40 Pi or an existing server)

free software · ~€40 one-off hardware · [adguard home →](https://github.com/AdguardTeam/AdGuardHome)

##### ControlD · *the customization pick*

`🇨🇦 canada` · `encrypted dns` · `customizable` · `free tier`

The dial-in-everything option: per-device profiles, toggleable block-list categories (ads, malware, social, gambling, and dozens more), custom rules per domain, and analytics, all from one dashboard. More granular than NextDNS in the controls it exposes, at the cost of a steeper setup curve; this is the pick for someone who wants to tune exactly what's blocked on exactly which device, not someone who wants to set it once and forget it.

**Good:**
- Very granular per-device and per-profile block-list control
- Supports DoH, DoT, and DNS-over-QUIC
- Free tier is genuinely usable, not just a trial
- Custom routing rules (split DNS, redirects) beyond simple blocking

**Mind the:**
- The dashboard's depth is a learning curve, not a five-minute setup
- Canada is a Five Eyes jurisdiction, if that's in your model
- Easy to over-configure and spend an evening tuning rules

free tier · paid tiers from ~$2/mo · [controld.com →](https://controld.com)

##### ReThinkDNS · *the all-in-one pick*

`🇮🇳 india` · `encrypted dns` · `partially open source` · `no account` · `free tier`

ReThinkDNS is a free encrypted resolver (DoH and DoT) with over 190 selectable blocklists, run by Celzero out of India. Its Android app pairs the resolver with a local firewall that tracks and blocks connections per app, and neither needs a signup. A WireGuard VPN add-on (RPN, from $1.75/month) rounds out a bundle nothing else in this category offers in one free app. The open app and resolver code are the main reassurance on offer; no independent audit exists, and Indian jurisdiction brings data-retention rules worth weighing.

**Good:**
- Free core with no signup: encrypted DNS plus a per-app firewall and connection tracker
- DNS, firewall, and WireGuard VPN in one Android app is a rare bundle
- App and resolver code are both open source

**Mind the:**
- No independent audit; the no-logging policy is the company's word alone
- India's CERT-In rules require five-year identity retention from VPN-classified providers; the company hasn't publicly addressed this
- The app (firewall included) is Android-only; other platforms only get the resolver endpoints
- RPN is a paid add-on, separate from the free core

free core · RPN from $1.75/mo · [rethinkdns.com →](https://rethinkdns.com)

##### Cloudflare DNS · *the audited pick*

`🇺🇸 usa` · `encrypted dns` · `audited` · `partially open source` · `free`

Cloudflare DNS (1.1.1.1) is the big mainstream free resolver, and what sets it apart here is verification: KPMG has independently audited Cloudflare's data-handling claims, most recently in April 2026, so the 25-hour retention figure is a checked fact instead of a promise. Few free resolvers can show anything close. Just know what you're getting: it's a plain, fast resolver that filters nothing, run by a giant US company, and the trust rests on that audit, not on open code.

**Good:**
- KPMG-verified logging claims: 25-hour retention, full IPs never written to disk
- Free with no tiers; DoH, DoT, DNS-over-Tor, and Oblivious DoH all supported
- Never blocked or filtered content despite legal requests, per its transparency reports
- Only one third party (APNIC) receives query data, anonymized and IP-free

**Mind the:**
- The base resolver doesn't filter ads or trackers at all
- The resolver's backend is closed source, and the KPMG report is request-only
- US jurisdiction, if that's in your threat model
- A 62-minute global outage in July 2025, disclosed in a detailed public post-mortem

free · [one.one.one.one →](https://one.one.one.one)

#### Worth knowing

- **Set it at the router if you can.** One change covers every device, including the ones you can't configure. Phones and laptops that leave the house should also get the resolver set per-device (iOS/Android both support DoT/DoH profiles natively).
- **Match DNS to your VPN.** A VPN tunnel carries its own DNS. On Mullvad, use Mullvad DNS; on Proton, NetShield. Keeping resolution consistent with the tunnel's infrastructure preserves a uniform fingerprint; fighting your VPN to use a third party does the opposite.
- **Expect some breakage, know the fix.** A login page that won't load or an email link that dies is usually one allowlist entry away. Filtering DNS without knowing how to whitelist is how people end up back on the ISP default.
- **Your resolver sees a lot: choose like it matters.** Domain history is a complete map of your interests. "Free" resolvers from ad companies are free for a reason; everything recommended here has a published, plausible reason to exist, and self-hosting removes the question entirely.

---

### VPNs

> A VPN does one thing: it moves trust from your internet provider to the VPN operator. That's genuinely useful on hostile networks, against ISP logging, and for shifting your apparent location, but it is not an invisibility cloak, whatever YouTube sponsorships say.

**before you pick:** The VPN industry runs on fear marketing and affiliate money. Most "best VPN" lists are ranked by commission, not merit. This page has no affiliate links: these three are here because of audits, track records, and honest engineering. If a provider sponsors influencers heavily, ask yourself where that money comes from.

**What matters here:**
- **audited no-logs claims**: Anyone can write "no logs" on a landing page. Independent audits, and better yet, real-world incidents handled transparently, are the proof.
- **anonymous payment**: A VPN that knows your card number knows you. Cash, Monero, or vouchers keep the account unlinked from your identity, if your model needs that.
- **modern protocols**: WireGuard (or well-implemented OpenVPN) with no proprietary mystery protocols. Bonus: multihop and obfuscation for hostile networks.
- **jurisdiction & ownership**: Who owns the company, and which legal system can compel them? No VPN is above jurisdiction: transparent ownership beats a flag-of-convenience shell.

#### Recommendations

##### Proton VPN · *the default pick*

`🇨🇭 switzerland` · `audited no-logs` · `open source` · `free tier`

Top-tier performance, an independently audited no-logs policy, a wide server network, and the practical kicker: bundling with Proton Mail at a meaningful discount. The suite deal is hard to compete with on value alone. The free tier is also the only one on the market worth recommending: no cap, no ads, funded by the paid plans rather than your traffic.

**Good:**
- Fast, audited, open-source apps on every platform
- 5th consecutive annual independent audit (Securitum), plus a SOC 2 Type II
- Bundle pricing with Mail/Drive/Pass: one subscription, whole stack
- Trustworthy free tier, rare enough to be notable
- Stealth protocol for networks that block VPNs

**Mind the:**
- VC-backed and increasingly commercial: worth tracking, not currently a red flag
- Account requires an email address (use an alias)
- Not above jurisdiction; no VPN is. Switzerland helps, it doesn't exempt

free tier · paid from ~€5/mo (less bundled) · [protonvpn.com →](https://protonvpn.com)

##### Mullvad · *the anonymity pick*

`🇸🇪 sweden` · `anonymous signup` · `cash accepted` · `audited` · `paid`

The privacy-first gold standard. You get a random account number, no email, no name, and you can pay by mailing cash in an envelope. Flat €5/month forever, RAM-only servers, frequent audits, and when Swedish police raided them in 2023 there was nothing to take. If maximum network-level anonymity matters more than convenience and ecosystem value, this is the correct answer.

**Good:**
- Account is a number; payment can be cash or Monero
- RAM-only infrastructure; minimal attack surface by design
- Raid-tested no-logs claim, the rarest credential there is
- WireGuard-only now (OpenVPN fully retired Jan 2026), multihop, quantum-resistant tunnels

**Mind the:**
- No streaming-unblocking arms race: some services stay blocked
- Port forwarding was removed entirely
- OpenVPN is gone: no fallback protocol if WireGuard is blocked on your network
- Fewer countries and conveniences than Proton: austerity is the product

€5/mo flat, always · [mullvad.net →](https://mullvad.net)

##### Windscribe · *the everyday alternative*

`🇨🇦 canada` · `audited no-logs` · `ad blocking` · `free tier`

The closest runner-up to Proton on everyday usability. Transparent to a fault: NCC Group audited it in 2024, and in 2025 a Greek prosecution tried to compel user data and Windscribe had nothing to hand over, a real-world no-logs test. The team also communicates like humans rather than a legal department. Strong free tier, and the build-a-plan pricing means you only pay for locations you use.

**Good:**
- NCC Group-audited (2024); withstood a real attempt to compel user data in 2025 with nothing to hand over
- Generous free tier; flexible à-la-carte pricing
- Built-in blocker (R.O.B.E.R.T.) covers ads/trackers at the tunnel level

**Mind the:**
- Canada is a Five Eyes jurisdiction, if that's in your model
- Still a thinner audit trail than Proton or Mullvad despite the 2024 audit
- No anonymous-signup story comparable to Mullvad's

free tier · paid from ~$3/mo build-a-plan · [windscribe.com →](https://windscribe.com)

##### IVPN · *the no-account pick*

`🇬🇮 gibraltar` · `anonymous signup` · `multihop` · `audited` · `paid`

Privacy-first in the same lineage as Mullvad: sign up with nothing but a randomly generated account number, pay with cash mailed in or crypto, and get independently audited apps with multihop connections for splitting trust across two jurisdictions at once. IVPN has long published its own anti-marketing essays on why VPNs aren't a privacy panacea, a level of candor that's rare in this industry and a strong signal about who's actually running the place.

**Good:**
- No email or personal info required to create an account
- Cash and crypto payment options, same as Mullvad
- Independently audited apps and infrastructure; on its 7th consecutive annual Cure53 audit
- Multihop included in the base Standard plan, not gated to a pricier tier

**Mind the:**
- Smaller server network than Proton or Mullvad
- No meaningful free tier, short trial only
- Less brand recognition; fewer eyes on it than the larger players

from ~$3.90/mo (3yr) · $6/mo month-to-month · [ivpn.net →](https://www.ivpn.net)

##### Obscura VPN · *the split-trust pick*

`multihop` · `wireguard` · `audited` · `paid`

A newer architecture rather than a newer brand on the same old design: Obscura splits the VPN into two independently operated hops so that no single party ever sees both who you are and what you're doing, conceptually similar to Apple's iCloud Private Relay, but usable as a standalone VPN rather than tied to Apple's ecosystem rules. Available on macOS, iOS, and now Android, with Windows and Linux in development behind a waitlist; this is still newer, less-proven infrastructure relative to a decade-old operator.

**Good:**
- Split-trust, two-hop design: structurally resistant to a single operator seeing everything
- Modern WireGuard-based implementation
- Clean, focused apps on Apple platforms and Android
- Independently audited (Cure53, Dec 2025): no high/critical findings

**Mind the:**
- New company, no long-term track record or raid history to point to yet
- Windows and Linux apps are still in development (waitlist)
- Smaller network and team than the established players

$8/mo · [obscura.net →](https://obscura.net)

##### AzireVPN · *the blind-operator pick*

`🇸🇪 sweden` · `audited no-logs` · `ram-only` · `wireguard` · `paid`

The differentiating feature isn't just diskless servers: it's **Blind Operator Mode 2.0**, which physically and logically severs remote and local admin access on every running server, meaning nobody on staff can reach live traffic. An X41 D-Sec audit in April 2026 confirmed zero IP, DNS, or traffic logging, the first independent audit commissioned since Malwarebytes acquired the service in late 2024. WireGuard-only since March 2025; Swedish jurisdiction with the same 14 Eyes caveat as Mullvad, and the same practical answer: no logs means nothing to hand over.

**Good:**
- X41 D-Sec audit (April 2026) confirmed zero IP, DNS, and traffic logging; independently commissioned, not self-reported
- Blind Operator Mode 2.0: admin access physically and logically severed on live servers, beyond standard diskless infrastructure
- Kill switch built-in across all platforms; on by default, cannot be turned off
- First VPN to implement WireGuard in 2017; WireGuard-only since March 2025
- Port forwarding supported, notable since Mullvad removed it entirely

**Mind the:**
- Malwarebytes-owned since November 2024: a commercial security company, different character from the other picks here
- First independent audit ever: a strong result, not yet a multi-year pattern
- 7-day refund window; 1-month plans and crypto payments explicitly excluded
- Kill switch documented as on everywhere by default, but Q1 2026 independent testers reported inconsistent behavior: verify post-install

from ~€3.75/mo (12-month) · €5/mo month-to-month · [azirevpn.com →](https://www.azirevpn.com)

#### Worth knowing

- **Know what a VPN can't do.** Logged into Google? Google knows it's you, VPN or not. Browser fingerprinting, cookies, and account logins all work fine through a tunnel. A VPN hides your IP from sites and your traffic from your ISP: that's the whole list.
- **You might not need one.** On your home network with encrypted DNS, HTTPS already covers most of it. The strong cases: public Wi-Fi, ISPs that sell browsing data, censorship, and location shifting.
- **Turn on the kill switch.** Every pick here has one. Without it, a dropped tunnel quietly leaks your real IP until you notice.
- **Match your DNS to your tunnel.** When the VPN is up, use its resolver (Proton's NetShield, Mullvad's DNS) rather than fighting it with a third party: consistent infrastructure means a consistent fingerprint. See DNS & Network.
- **Tor, not a VPN, for anonymity.** If your threat model involves someone determined to identify you, a VPN moves trust; Tor distributes it. Different tool, different guarantees.

---

### Anonymizing Networks

> A VPN moves your trust from your ISP to one company. An anonymizing network is built so that no single party can link who you are to what you're doing: your traffic hops through several relays, and each one only knows its own neighbors.

**before you pick:** For almost everyone, anonymity means the Tor Browser, used as-is, without logging into your real accounts. Everything else on this page is for a more specific job: phones, hidden services, censorship, or experiments.

**What matters here:**
- **who sees what**: The whole game is preventing any one party from linking your identity to your destination. Judge every design by that question.
- **the speed tax**: Every extra hop adds latency. Tor is fine for browsing and painful for video calls; the other networks trade differently.
- **exit or internal**: Tor is built to reach the normal web through exit relays. I2P and Lokinet mostly serve destinations inside their own networks.
- **crowd size**: Anonymity loves company. A big, ordinary user base means the network says little about you; a tiny one makes you stand out.

#### The tools

##### Tor · *the default pick*

`onion-routed` · `nonprofit` · `open source` · `free`

Tor is **the** anonymizing network, run by a nonprofit and studied by more researchers than every alternative combined. Each connection builds a three-hop circuit (guard, middle, exit) through thousands of volunteer relays, and no single relay learns both who you are and where you're going. The right way to use it is the Tor Browser.

**Good:**
- No single relay can link you to your destination
- The Tor Browser normalizes your fingerprint so you blend in with every other Tor user
- Arti, the Rust reimplementation, now ships with congestion control on by default
- WebTunnel bridges disguise Tor traffic as ordinary HTTPS where it's blocked

**Mind the:**
- Slow: fine for browsing, painful for calls and video
- Some sites block or captcha exit traffic
- Logging in to a real account de-anonymizes you instantly, Tor or not

free · nonprofit · [torproject.org →](https://www.torproject.org)

##### Orbot · *the mobile pick*

`onion-routed` · `open source` · `free`

Orbot puts Tor on your phone. On Android it runs as a local VPN and routes selected apps, or the whole device, through the Tor network, so it covers apps that have **no proxy settings of their own**. Guardian Project maintains both the Android and iOS versions and ships regular releases.

**Good:**
- Per-app routing on Android covers apps with no proxy settings of their own
- Whole-device mode when you want everything torified
- Actively maintained on both platforms

**Mind the:**
- iOS is system-wide only: Apple's platform restrictions rule out per-app selection
- There's no Tor Browser for iOS at all (Apple requires WebKit), so Orbot carries more of the load there
- On Android, browse in Tor Browser and leave Orbot to the rest

free · open source · [orbot.app →](https://orbot.app)

##### I2P · *the internal network*

`onion-routed` · `open source` · `free`

I2P is a network turned inward. Where Tor is mostly a private path to the normal web, I2P is designed for **services hosted inside the network itself** (called eepsites), and every participant relays traffic for others.

**Good:**
- Handles long-lived connections and torrenting better than Tor
- Java I2P bundles a real torrent client (I2PSnark), mail, and IRC
- i2pd gives you a lightweight C++ router for a VPS or a Raspberry Pi

**Mind the:**
- Clearnet browsing is the weak spot: exits to the normal web (outproxies) are scarce
- Java I2P wants a few hundred megabytes of RAM
- i2pd bundles no apps: you pair it with external torrent or mail software

free · open source · [geti2p.net →](https://geti2p.net)

##### Snowflake · *the censorship bridge*

`free`

Snowflake isn't a separate network; it's **a bridge into Tor** for people whose ISPs or governments block it. Traffic to blocked Tor entry points gets disguised as ordinary video-call (WebRTC) traffic and relayed through volunteers' browsers.

**Good:**
- Still actively recommended in the Tor Project's own circumvention guide
- Looks like ordinary video-call traffic on the wire
- You can run a proxy in a browser tab and help someone else get through

**Mind the:**
- Only useful when Tor itself is blocked; otherwise plain Tor Browser is simpler
- Not the answer everywhere: Tor's guide matches bridge types to regions, and sometimes that's WebTunnel instead
- You still get Tor's speed, since everything ends up on the Tor network anyway

free · part of the Tor Project · [snowflake.torproject.org →](https://snowflake.torproject.org)

##### Lokinet · *the experimental pick*

`onion-routed` · `open source` · `free`

Lokinet does onion routing at the network layer instead of per application, so in principle **any protocol can ride it**. Development now sits with the Session Technology Foundation (formerly the Oxen project). It's one to watch, not the default.

**Good:**
- Network-layer design: any protocol can ride it, not just a browser
- An active organization behind it, with recent releases and updated bootstrap infrastructure
- Being integrated into the Session messenger as its transport layer
- The standalone client stays live and installable on its own

**Mind the:**
- Far less studied than Tor, with a far smaller crowd to blend into
- Clearnet exits are limited
- The May 2025 move to the Session Network model is a real reorganization, and recent

free · open source · [lokinet.org →](https://lokinet.org)

#### Worth knowing

- **Tor Browser, not Tor in your browser.** Use the official Tor Browser instead of pointing a regular browser at the network. Half the job is the normalized fingerprint, and only the official browser gives you that.
- **Skip the VPN-plus-Tor layering debate.** For most people, plain Tor Browser is the right call; adding a VPN under or over it rarely helps and can make things worse; the Tor Project's own guidance says to skip the combination unless you really know what you're doing. If Tor itself is blocked where you are, use a bridge like Snowflake or WebTunnel instead.
- **Don't log in.** Signing in to your real accounts over Tor de-anonymizes you to those services instantly. Anonymity is a separate identity, not a cloak over your existing one; your threat model decides whether you need it at all.

---

## Credentials & Identity

### Password Managers

> If you do exactly one thing from this entire site, do this. A password manager gives every account a strong, unique password you never have to remember, which means one leaked site can't unlock the rest of your life.

**before you pick:** Any manager on this page beats reusing passwords, including the one built into your browser. Don't agonize over the choice; the win is using one at all. Pick, set a long memorable master passphrase, and turn on 2FA for the vault itself.

**What matters here:**
- **audits & track record**: You're trusting this thing with everything. Open code is one route to that trust; relentless third-party audits and a clean history are another. Insist on at least one.
- **zero-knowledge encryption**: The vault must be encrypted with your master password before it leaves your device. The provider should never be able to read it.
- **company trajectory**: A vault is a decade-long relationship. Leadership changes, quiet edits to public commitments, and private-equity fingerprints matter as much as the cryptography.
- **export & escape**: You should be able to export your vault to a standard format anytime. Lock-in on a password manager is lock-in on everything.

#### Recommendations

##### 1Password · *the default pick*

`🇨🇦 canada` · `closed source` · `audited` · `paid`

Best-in-class UX (polished, intentional, smoother than anything else in the category) on top of a hardened, thoroughly audited architecture. The "Secret Key" design means a stolen master password alone can't decrypt your vault. The trade-off is real: closed source and subscription-only is an ideological compromise, but an acceptable one given the company's track record, and given what's been happening at the alternative below.

**Good:**
- Genuinely best-in-class apps, autofill, and onboarding
- Secret Key adds real protection against server-side breaches
- Regular public audit reports and a strong security team
- Travel Mode hides chosen vaults at border crossings

**Mind the:**
- Closed source: trust is reputational + architectural, not fully auditable
- Prices rose in March 2026: about +33% Individual, +20% Families
- No free tier, subscription only
- No self-hosting option

from ~$48/yr billed annually · families ~$72/yr billed annually · [1password.com →](https://1password.com)

##### Bitwarden · *the open-source pick, watch it*

`🇺🇸 usa` · `open source` · `audited` · `self-hostable` · `free tier`

Still technically excellent: open source, audited yearly, a genuinely usable free tier, and self-hostable via Vaultwarden. The hesitation is company-level, not technical. The longtime CEO quietly moved to an advisory role with no announcement, replaced by an executive whose background centers on M&A at private-equity firms; the CFO changed just as quietly; "Inclusion" and "Transparency" disappeared from the company's stated values in favor of "Innovation" and "Trust", with old blog posts edited retroactively; and the "always free" language vanished, then reappeared after pushback. That pattern reads like pre-acquisition groundwork: the same trajectory that once drove people away from LastPass. Founder Kyle Spearrin has pushed back publicly, calling the leadership changes unrelated to each other and the free-tier wording change a marketing mix-up.

**Good:**
- Fully open source with annual third-party audits
- Usable free tier: unlimited entries and devices
- Self-hosting via Vaultwarden decouples you from the company entirely
- May yet recover credibility: the code hasn't changed, the boardroom has

**Mind the:**
- Unannounced leadership changes and quietly edited public commitments
- New executive profile suggests an exit is being prepared
- Premium price roughly doubled (to ~$19.80/yr), its first price change in about a decade
- If an acquisition lands, re-evaluate immediately: export early, not late

free · premium ~$19.80/yr · [bitwarden.com →](https://bitwarden.com)

##### KeePassXC · *the local-only pick*

`local-first` · `open source` · `no account` · `totp` · `free`

No cloud, no account, no company: your vault is a single encrypted file on your own disk. Nothing leaves your machine unless you move it. Even if you run 1Password or Bitwarden day to day, keep a periodic KeePassXC export as a local encrypted backup: it decouples your credentials from any single vendor's future, which is precisely the risk the entries above are wrestling with.

**Good:**
- Zero trust in any third party: the file never leaves you
- Open standard (KDBX) readable by many apps, including KeePassDX on Android
- Built-in TOTP, passkey support, browser integration
- No business model to rot, no boardroom to watch

**Mind the:**
- You own sync, backups, and recovery: lose the file and master password, lose everything
- No official mobile app (third-party KeePass apps fill in)
- Less convenient for sharing credentials with family

free, donation-funded · [keepassxc.org →](https://keepassxc.org)

##### Proton Pass · *the ecosystem pick*

`🇨🇭 switzerland` · `partially open source` · `e2ee` · `aliasing` · `free tier`

Part of the Proton suite, with open-source clients and end-to-end encryption across the board. The standout feature is built-in hidden-by-alias email aliasing: every login can get a unique forwarding address generated right next to its password, no separate alias service required. If you're already on Proton Mail, Drive, or VPN, Pass slots into the same account and billing with zero extra setup.

**Good:**
- Open-source apps across every platform
- Built-in email aliasing (hidden-by-alias) on top of password storage
- Integrates cleanly with the rest of the Proton ecosystem
- Usable free tier; cheap as an add-on to an existing Proton plan

**Mind the:**
- Younger product than 1Password or Bitwarden, smaller third-party audit history so far
- Most natural fit if you're already in the Proton ecosystem; less of a draw standalone
- No self-hosting option

free tier · paid from ~€2/mo · [proton.me/pass →](https://proton.me/pass)

##### Dashlane · *the mainstream one, not a pick*

`🇺🇸 usa` · `zero-knowledge` · `closed source` · `paid`

Dashlane is a subscription password manager and digital wallet: autofill, dark web monitoring, passkey support, and a bundled VPN (a rebranded Hotspot Shield). It's on this page the way Telegram is on the messengers page: popular enough that you should know exactly where it stands, not because it beats the picks above. Its record cuts both ways: the zero-knowledge vault design held up under a real attack in May 2026, but that was still the company's first confirmed customer-facing incident, and it doesn't publish the kind of named-firm audit Bitwarden and 1Password do. Your contract sits with Dashlane USA in New York or Dashlane SAS in Paris, depending on where you're billed.

**Good:**
- Zero-knowledge architecture that held up under a real attack: stolen vaults stayed encrypted
- Client app source is published on GitHub for inspection (non-commercial license, server stays closed)
- Friends & Family covers 10 people, more than 1Password (5) or Bitwarden (6)
- Bundled VPN with Premium, unusual for the category

**Mind the:**
- No published named-firm audit; SOC 2 and ISO 27001 cover organizational controls, not the crypto
- May 2026 incident: unauthorized devices on fewer than 20 accounts, encrypted vaults downloaded
- No free plan since September 2025, and billing is annual-only
- You can't buy the password manager without also paying for the VPN bundle

premium ~$4.99/mo billed annually · friends & family ~$7.49/mo billed annually · [dashlane.com →](https://www.dashlane.com)

#### Worth knowing

- **The master passphrase is the whole game.** Make it long and memorable: four or five random words beats P@ssw0rd2026! by miles. Write it down and store the paper somewhere physically safe until it sticks.
- **Protect the vault with 2FA.** A hardware key or TOTP app on the manager itself means a phished master password still isn't enough. See 2FA & Hardware Keys.
- **Keep a vendor-proof backup.** Export your vault to an encrypted KeePassXC database every few months and store it locally. Companies get acquired, policies change, accounts get locked; a local copy turns all of those from emergencies into inconveniences.
- **Save the recovery kit.** Most managers generate recovery codes or an emergency sheet at signup. Print it. The most common way people lose a vault isn't hackers, it's locking themselves out.
- **NordPass is worth knowing, not what this page steers you toward.** It's a mainstream, polished, commercial password manager, a fine reference point if you're comparing options, and not a bad place to land if you're already invested in the NordVPN ecosystem. But it's closed source and leans more on marketing than the picks above, so it doesn't make this page's recommendations.

---

### 2FA & Hardware Keys

> A second factor means a stolen password isn't enough. The jump from no 2FA to any 2FA is enormous; the jump from app codes to a hardware key kills phishing almost entirely. Do it for your email and password manager first; they unlock everything else.

**before you pick:** Not all second factors are equal. SMS codes can be intercepted via SIM-swap; app codes (TOTP) can be phished in real time; hardware keys verify the site's identity and can't be phished. Use the best method each account offers, and treat SMS as a last resort, not an option you add alongside better ones.

**What matters here:**
- **phishing resistance**: FIDO2/passkey hardware checks it's talking to the real site. TOTP codes don't: a convincing fake page gets your code.
- **backup & recovery**: The most common 2FA disaster is self-inflicted lockout. Whatever you pick needs a recovery plan from day one.
- **open source / open spec**: FIDO2 and TOTP are open standards. Open firmware (or at least open apps) means the implementation can be checked too.
- **cross-platform reach**: Your factor has to work on your phone, your laptop, and that one ancient government portal. USB-C plus NFC covers the most ground.

#### Recommendations

##### YubiKey 5 Series · *the default key*

`🇸🇪 sweden` · `fido2` · `totp` · `closed source` · `paid`

The reference hardware key: tap to log in, immune to phishing, supported by practically every service that supports anything. One key (USB-A or USB-C, with NFC) does FIDO2/passkeys, TOTP storage, PGP, and smartcard duty. Buy two: one on the keychain, one in a drawer, and register both everywhere, every time.

**Good:**
- Widest service compatibility of any key, by far
- Phishing-proof FIDO2/WebAuthn plus TOTP/PGP/PIV in one device
- Indestructible in practice: survives keychains, washing machines, years
- NFC works with phones; no battery, nothing to charge

**Mind the:**
- Closed-source firmware: you're trusting Yubico
- ~€55 each, and you really do need two
- Firmware isn't updatable: a flaw means new hardware

from ~€55 per key · [yubico.com →](https://www.yubico.com)

##### Nitrokey 3 · *the open-source key*

`🇩🇪 germany` · `fido2` · `totp` · `open source` · `paid`

Same job as the YubiKey (USB-A or USB-C, with NFC) with fully open-source, updatable firmware: you can audit what runs on the key, and flaws get patched rather than re-purchased. Made in Germany with a transparent supply chain. The ecosystem is a little younger, so check your critical services against their compatibility notes before going all-in.

**Good:**
- Open firmware on open hardware: verifiable end to end
- Updatable: security fixes don't require new hardware
- EU-based company, privacy-first by charter

**Mind the:**
- Some advanced features landed later than Yubico's equivalents
- Less tested against obscure enterprise systems
- Slightly pricier per key

from ~€65 per key · [nitrokey.com →](https://www.nitrokey.com)

##### Aegis Authenticator · *the android totp pick*

`android only` · `totp` · `open source` · `local-first` · `free`

The best TOTP app on Android: open source, vault encrypted and lockable behind biometrics, and, the part that matters, proper encrypted exports, so a lost phone isn't a lost identity. Auto-backup the vault to a synced folder and recovery becomes a non-event.

**Good:**
- Encrypted, exportable vault: the recovery story done right
- Open source, no account, no cloud dependency
- Imports from basically every other authenticator

**Mind the:**
- Android only: iPhone users want Tofu or Ente Auth instead
- Backups are your responsibility, automate them once, properly
- TOTP is still phishable; upgrade critical accounts to a key

free, open source · [getaegis.app →](https://getaegis.app)

##### Ente Auth · *the cross-platform totp pick*

`totp` · `open source` · `e2ee` · `audited` · `free`

TOTP codes that follow you across Android, iOS, and desktop with end-to-end encrypted sync: the convenience of Authy without the closed source or the phone-number account. From the team behind Ente Photos; the auth app is free and the sync is optional if you'd rather stay offline.

**Good:**
- E2EE multi-device sync: lost phone, zero drama
- Open source with published audits
- Works offline; sync account is optional

**Mind the:**
- Sync means trusting their infrastructure exists tomorrow (export regularly)
- Younger project than Aegis
- Same TOTP phishing ceiling as every code app

free · [ente.io/auth →](https://ente.io/auth)

##### Proton Auth · *the proton-ecosystem pick*

`all platforms` · `totp` · `open source` · `e2ee` · `free`

Proton's own TOTP authenticator, doing the same job as Ente Auth: open source with end-to-end encrypted sync across devices, but living inside the Proton account you may already have for Mail, Pass, or VPN. The natural default if you're already standardized on Proton and would rather not add another vendor for one more app.

**Good:**
- E2EE sync across devices, same model as Ente Auth
- Open source
- Shares login and billing with the rest of the Proton suite

**Mind the:**
- Younger than Aegis or Ente Auth: smaller track record so far
- Biggest advantage is ecosystem convenience, not a feature edge over Ente Auth
- Same TOTP phishing ceiling as every code app

free · [proton.me/authenticator →](https://proton.me/authenticator)

#### Worth knowing

- **Two keys or no keys.** A single hardware key is a single point of lockout. Register the backup key at the same time as the primary, every account, no exceptions; retrofitting later never happens.
- **Store recovery codes like they're passwords.** Because they are. Every service hands you one-time recovery codes when you enable 2FA; they go in your password manager, not a screenshot folder.
- **Passkeys are this, minus the dongle.** A passkey is FIDO2 credentials synced by your password manager or platform. Where offered, they're a real upgrade over passwords-plus-TOTP, and they coexist fine with hardware keys.
- **Remove SMS where you can.** Adding a stronger factor often leaves SMS active as a fallback, which means your security is still your phone number. Check each account's 2FA settings and delete the SMS option once a better one works.

---

### Alias Services

> Email aliasing lets you give every signup a unique, disposable forwarding address instead of your real one. A leak becomes traceable to one specific site and instantly revocable: kill the alias and the spam, the breach fallout, or the data broker feed all stop at the source.

**before you pick:** Several email providers already prepackage this feature: Proton Mail's paid plans and StartMail's unlimited built-in aliases both ship aliasing for free inside the inbox (see Email Providers ). A standalone alias service earns its keep when your primary email provider doesn't already include one, or when you want aliasing decoupled from whichever inbox you're using this year.

**What matters here:**
- **per-alias revocation**: One bad alias should be killable in one click without touching any other alias or your real address.
- **custom domain support**: Aliasing on a domain you own means you're not dependent on the provider's shared domain staying off blocklists, or the provider at all.
- **reply-from-alias**: Replying through the alias keeps your real address hidden from the other side of the conversation, not just the inbound leg.
- **open source / self-hosting**: Forwarding is a small, auditable job. Open code and a self-host option mean the service can outlive the company running it.

#### Recommendations

##### SimpleLogin · *the default pick*

`open source` · `self-hostable` · `reply-from-alias` · `browser extension` · `free tier`

Now owned by Proton but still operating semi-independently: separate apps, separate branding, its own free tier. Aliases are created in a click via the browser extension at the exact moment a site asks for an email, replies go out through the alias automatically, and the whole thing is open source and self-hostable if you'd rather run it yourself. It's already mentioned in passing on the Email Providers page as part of the Proton bundle; this is its first full dedicated treatment.

**Good:**
- Open source clients and server; self-hostable
- Reply-from-alias keeps your real address out of the conversation entirely
- Browser extension makes alias creation a one-click habit
- Usable free tier; subscription is now unified with Proton Pass Plus, each includes the other's features

**Mind the:**
- Now Proton-owned: independent today, worth watching long-term
- Custom domains require a paid plan
- Free tier caps active aliases

free · premium from ~€2.5/mo · [simplelogin.io →](https://simplelogin.io)

##### Addy.io · *the independent pick*

`open source` · `self-hostable` · `reply-from-alias` · `browser extension` · `free tier`

Formerly AnonAddy, with the same core feature set as SimpleLogin (reply-from-alias, custom domains, browser extension), but no Proton ownership in the picture. The one to reach for if you'd rather keep your alias provider and your email provider completely unrelated companies, or if you're already deep in the Proton ecosystem and want a second, unconnected vendor for this specific job.

**Good:**
- Fully open source and self-hostable
- Independent of Proton or any larger suite
- Reply-from-alias and custom domains, including on the free tier's limits
- Competitive pricing on paid tiers

**Mind the:**
- Smaller team than SimpleLogin/Proton: fewer hands on support
- Browser extension and mobile apps are less polished
- Free tier alias cap is fairly low

free · premium from ~€1/mo · [addy.io →](https://addy.io)

#### Worth knowing

- **Pair aliasing with your password manager.** Store the alias right next to the password for that site in your password manager, so when a breach notification arrives, you'll know exactly which alias to kill instead of guessing.
- **Have a recovery-email strategy before you lean on aliases hard.** Account recovery flows sometimes choke on alias addresses, and an alias service going down shouldn't double as a way to lose access to everything tied to it. Keep at least one stable, non-aliased recovery address on file.
- **Aliasing isn't anonymity.** The alias hides your address from the site you signed up with; it doesn't hide your IP, your payment details, or your identity from the alias provider itself. Pick the threat model accordingly.

---

### Personal Data Removers

> Data broker sites aggregate and resell your name, address, phone number, relatives, and property records to anyone who pays. Removal services automate the opt-out requests across hundreds of these brokers so you're not filing them by hand one at a time.

**before you pick:** Manage expectations: these services reduce exposure, they don't guarantee permanent removal. Brokers re-scrape public records periodically, so a name removed today can resurface in a few months. That's also why this is a recurring subscription category rather than a one-time purchase: the underlying work is recurring, not the billing model being greedy.

**What matters here:**
- **breadth of broker coverage**: The internet has hundreds of data brokers, and new ones appear constantly. More coverage means fewer gaps for old data to hide in.
- **automation vs. manual opt-outs**: Some brokers accept automated requests; others require a human to fill out a form or mail a letter. A service that does both covers more ground.
- **recurring re-removal & monitoring**: Removal isn't permanent. The service needs to keep checking and re-filing as brokers re-list you, not just run once at signup.

#### Recommendations

##### EasyOptOuts · *the recommended pick*

`paid`

The default recommendation on this page on price: ongoing monitoring rather than a one-and-done sweep, at $19.99/year flat, well under what the other two entries on this page cost. No flashy upsells, just the opt-out work done on a recurring basis. Coverage is narrower than Incogni or DeleteMe (around 100+ brokers vs. their broader lists), a real trade-off for the price.

**Good:**
- Cheapest entry on this page by a wide margin: $19.99/year flat, no monthly option
- Ongoing re-removal, not a single sweep
- Simpler, less aggressively marketed than the big-name competitors

**Mind the:**
- Narrowest broker coverage of the three (~100+ sites vs. Incogni's 420+)
- Smaller company, less brand recognition than Incogni or DeleteMe
- No free tier; it's subscription-only like the rest of this category
- Re-removal happens on a cycle, not instantly: exposure can briefly reappear

$19.99/yr flat · [easyoptouts.com →](https://easyoptouts.com)

##### Incogni · *the broad-coverage pick*

`paid`

One of the broadest broker lists in the category, with a straightforward subscription model and a track record of actually following through on removal requests. Built in-house by Surfshark, which merged with Nord Security in 2022 under the holding company Cyberspace B.V., so Incogni now sits under the wider Nord umbrella alongside NordVPN, not a red flag on its own, but worth knowing if you're trying to keep your privacy-tool vendors from concentrating under one umbrella.

**Good:**
- Very broad broker coverage
- Established track record and clear reporting on what's been removed
- Family plans available for covering household members

**Mind the:**
- A Surfshark product, now under the wider Nord group: same group runs a VPN you may also be evaluating
- No free tier
- Some brokers are handled faster than others; full coverage takes time

from ~$8/mo · [incogni.com →](https://incogni.com)

##### DeleteMe · *the established pick*

`paid`

The longest-running name in this category, with a human-reviewed reports element on top of the automated sweeps: actual people check the broker listings rather than relying purely on scripts. That human layer is reflected in the price, which runs higher than the more automation-first competitors above.

**Good:**
- Long track record and brand recognition
- Human review adds a layer automated-only services skip
- Detailed periodic reports on what was found and removed

**Mind the:**
- Pricier than Incogni or EasyOptOuts for a comparable scope
- No free tier
- Human-in-the-loop steps can mean slower turnaround on some requests

from ~$10/mo · [joindeleteme.com →](https://joindeleteme.com)

#### Worth knowing

- **Google Data Removal is free and narrower in scope.** Google's own "Results about you" tool lets you request removal of personal info (your address, phone number, and similar) from Google Search results specifically. It's not a broker-removal service and won't touch the underlying broker listing, only Google's index of it, but it's free and worth doing regardless of which paid service above you pick.
- **No removal service prevents new data from appearing.** This whole category is an ongoing process, not a one-time fix; new brokers launch, old ones re-scrape public records, and a clean report today doesn't mean a clean report in six months. Budget for it as a subscription, not a purchase.

---

## Communication

### Messengers

> Before picking a messenger, frame it as platform replacement: what you're leaving matters as much as what you're joining. SMS to iMessage is a meaningful gain. WhatsApp to Signal is a significant one. WhatsApp to Telegram is not an upgrade at all, it's a lateral move into something arguably worse, wearing a privacy costume.

**before you pick:** End-to-end encryption protects message content, not the fact that you messaged someone, when, or how often. That's metadata, and it's where messengers really differ. Who can see your social graph matters as much as who can read your texts.

**What matters here:**
- **e2ee by default**: Encryption you have to remember to turn on is encryption that's usually off. This single criterion disqualifies more apps than any other.
- **metadata exposure**: What the server learns: your contacts, group memberships, timing patterns. The best designs can't even see who's talking to whom.
- **identifier required**: Needing a phone number ties chats to a real-world identity. Usernames are better; no identifier at all is the frontier.
- **protocol scrutiny**: Open, peer-reviewed protocols (Signal's, MLS) have survived years of cryptographic attention. Custom in-house designs haven't earned that trust.

#### Recommendations

##### Signal · *the default pick*

`🇺🇸 usa` · `e2ee always` · `metadata-resistant` · `open source` · `free`

The current gold standard, and not just by reputation: the Signal Protocol has been cryptographically scrutinized more than any other consumer messenger and holds up: it's what everyone else borrows. Minimal metadata retention (subpoena responses have famously contained two timestamps), sealed sender, disappearing messages, and it looks like a normal app, which is why you can actually move your group chats here. Essential for anything sensitive; reliable cross-platform for everything else.

For Android users who want more: Molly is a hardened Signal fork with an encrypted local database (locked at rest behind a passphrase) and built-in Tor/Orbot support. Same network, same contacts, sturdier client.

**Good:**
- E2EE on absolutely everything: messages, calls, groups, attachments
- Sealed sender and private contact discovery minimize metadata
- Usernames mean you can chat without sharing your number
- Nonprofit, open source, relentlessly audited

**Mind the:**
- Phone number still required to register
- Centralized: one service, one US-based operator
- Desktop app must be linked to a phone first

free, donation-funded · [signal.org →](https://signal.org)

##### iMessage · *the apple-baseline pick*

`🍎 apple only` · `e2ee optional` · `closed source` · `free`

A reasonable secondary for everyday domestic conversation between Apple devices: E2EE device-to-device, zero setup, and substantially better than SMS or unencrypted RCS. The trust model is simple: you're trusting Apple entirely. Since iOS 26.5, green-bubble chats with Android can also be end-to-end encrypted over RCS, but it's beta and depends on both carriers supporting it, so plain SMS fallback still happens when it isn't available. iCloud backups are a separate trap: not E2EE until you enable Advanced Data Protection. A useful mental model: Signal for anything sensitive, iMessage as the baseline for people who won't install Signal.

**Good:**
- E2EE by default between Apple devices, no setup at all
- Meaningful upgrade over SMS/RCS for ordinary conversation
- Already installed on the phones your family actually uses
- Beta E2EE RCS now reaches some Android contacts too

**Mind the:**
- Without Advanced Data Protection, iCloud backups expose message history, enable it
- E2EE RCS with Android is beta and partial: needs carrier support, and some users report delivery hiccups
- Closed source; trust is entirely in Apple; Apple-only by design

free with apple hardware · [apple ADP guide →](https://support.apple.com/en-us/108756)

##### SimpleX · *the no-identifier pick*

`no identifier required` · `e2ee always` · `open source` · `metadata-resistant` · `free`

Genuinely interesting for high threat models: no user IDs whatsoever, not even phone numbers or usernames. Conversations run over unidirectional relay queues that can't be correlated into a social graph, making it truly metadata-resistant by architecture rather than by policy. Newer and less battle-tested than Signal, but the most privacy-forward design currently available in a consumer messenger.

**Good:**
- No identifier means nothing to subpoena, leak, or correlate
- Metadata resistance by design, not by promise
- Open source, double-ratchet encryption, self-hostable relays
- Independently audited twice (Trail of Bits); post-quantum-resistant key exchange built in

**Mind the:**
- Younger protocol with a shorter audit history than Signal's
- Multi-device and delivery UX still have rough edges
- Small network: you'll be onboarding your contacts yourself

free, open source · [simplex.chat →](https://simplex.chat)

##### Matrix / Element · *the federation pick*

`federated` · `e2ee optional` · `self-hostable` · `open source` · `free`

Matrix is a protocol, not a company: like email, anyone can run a server and talk to every other server. The result is messaging nobody can switch off: the right answer for communities, team communication, and people who want to own their infrastructure. Know the fine print: E2EE is available but not universally default (it depends on server and client configuration), and room metadata is visible to every participating server. More friction than Signal; a different use case, not a replacement.

**Good:**
- No central operator: self-host or pick any homeserver
- E2EE in DMs and private rooms (verify your client's defaults)
- Element now requires verified devices for E2EE messages by default
- Rich rooms, threads, and bridges to other networks
- No phone number needed

**Mind the:**
- E2EE coverage depends on configuration: not a flat guarantee
- Room metadata (members, timing) spreads across participating servers
- Key verification and device management confuse newcomers

free · self-hosting from ~€5/mo · [element.io →](https://element.io)

##### Briar · *the off-grid pick*

`peer-to-peer` · `onion-routed` · `works offline` · `open source` · `free`

Briar has no server to subpoena because there is no server: messages travel peer-to-peer over Tor, or over Bluetooth and local Wi-Fi when the internet is down or blocked. Built for activists and journalists under real pressure. As a daily messenger it's spartan; as infrastructure of last resort it's unique.

**Good:**
- No central anything: nothing to block, seize, or log
- Works without internet via Bluetooth/Wi-Fi mesh
- All traffic over Tor by default; no phone number or email
- Desktop client (Windows/macOS/Linux) now in beta alongside Android

**Mind the:**
- Android and a beta desktop client only; iOS still unsupported (platform reasons)
- Both parties must be online to deliver: no server-side queueing
- No voice/video; battery cost from constant Tor connection

free · [briarproject.org →](https://briarproject.org)

##### Threema · *the pay-once pick*

`🇨🇭 switzerland` · `no phone number` · `one-time purchase` · `partially open source`

Threema skips the subscription model entirely: pay once, get a randomly generated Threema ID, and you're done: no phone number, no email required to use it. Swiss jurisdiction and a long-standing focus on metadata minimization mean the server learns very little about who's talking to whom. Most of the client code is open source and has been independently audited, though parts of the backend remain closed. Owner changed to Comitis Capital (German PE) in Jan 2026, the second private-equity owner since 2020.

**Good:**
- No phone number or email needed: random ID is the only identifier
- One-time purchase, not a recurring subscription
- Swiss jurisdiction, strong metadata minimization by design
- Independently audited; most code is open source

**Mind the:**
- Small network compared to Signal: onboarding contacts takes effort
- Some backend components aren't open source
- Now owned by German private equity (Comitis Capital), second PE owner since 2020
- One-time cost rose to €6, still real friction next to free competitors

€6 one-time, comitis capital (de) · [threema.ch →](https://threema.ch)

##### Session · *the onion-routed pick*

`onion-routed` · `no phone number` · `decentralized` · `open source` · `free`

Session routes every message through its own onion-style network of decentralized service nodes rather than a company-run server; there's no central operator to subpoena for your metadata. Built by the Session Technology Foundation (formerly the team behind Oxen), it needs no phone number or email; an account is just a generated ID. Onion routing adds latency you'll occasionally notice. A 2026 funding crisis nearly shut the project down entirely; it's still operating, but now on a much smaller team.

**Good:**
- No phone number, email, or other identifier required
- Onion routing over decentralized service nodes: no central server to compel
- Open source clients and protocol

**Mind the:**
- Independent 2026 research found multiple protocol vulnerabilities, including a flaw that could in principle allow network takeover
- Survived a 2026 funding crisis that nearly shut it down; runs on a much smaller team now, plus volunteers
- Onion routing trades some speed for the metadata resistance
- Smaller user base: expect to onboard contacts yourself

free, open source · [getsession.org →](https://getsession.org)

##### Telegram · *the one to avoid*

`e2ee not default` · `secret chats only` · `custom mtproto` · `cloud-stored history` · `free`

Telegram is not a private messenger, and that needs saying clearly because it's so often and so dangerously mislabeled. Regular chats and *all* group chats are server-side encrypted: **Telegram holds the keys and can read them**. Only "Secret Chats" are E2EE, they're not the default for anything, and you effectively can't use them on desktop. The custom MTProto protocol has had far less audit scrutiny than Signal's. Your messages sit in Telegram's cloud indefinitely unless you delete them, and the company has handed user data (IPs and phone numbers) to law enforcement when compelled; the CEO's 2024 arrest in France produced real policy shifts, not principled resistance. *It's a cloud messenger with a privacy reputation it hasn't earned. Treat it as social media, never as a Signal replacement.*

**Good:**
- Huge global user base, channels, and bot ecosystem
- Large file-sharing limits and cross-platform sync
- Familiar, polished UX

**Mind the:**
- Regular and group chats are server-side encrypted, not E2EE: Telegram can read them
- Secret Chats are E2EE but not default and unavailable on desktop
- Custom MTProto protocol, far less audited than Signal's
- Cloud history stored indefinitely; user data handed to law enforcement when compelled

free · [telegram.org →](https://telegram.org)

#### Worth knowing

- **The best messenger is the one your people will use.** Signal on everyone's phone beats a perfect tool nobody installed. Move one group chat at a time; the family one is usually easiest.
- **Turn on disappearing messages.** Encryption protects messages in transit; it does nothing about the archive sitting on a stolen or seized phone. A default timer (a week, say) is cheap insurance.
- **WhatsApp is better than its owner suggests, and worse than it looks.** It runs the Signal protocol underneath, so content encryption is solid. But it's Meta-owned, metadata is the product, and the privacy policy reflects that. A last resort when Signal isn't an option; not a true alternative.
- **Back up your keys.** On Matrix especially: lose your key backup passphrase and your encrypted history is gone for good. Store it in your password manager.

---

### Email Providers

> Email is where everything else lives: password resets, receipts, your real name. Moving it off Gmail or Outlook is one of the bigger wins you can get, and it's less painful than it sounds.

**before you pick:** Email was never designed to be private. Even the best provider here can't encrypt a message end-to-end when the other side is on Gmail. What you're choosing is who stores your mail, under which laws, and how much of it they can read. Set your expectations there and you'll choose well.

**What matters here:**
- **encryption at rest**: Can the provider read your stored mail? "Zero-access" means even they can't open your inbox.
- **jurisdiction**: The laws the provider answers to. Switzerland and Germany are popular for a reason: strong privacy law, no gag-order culture.
- **standard protocols**: IMAP/SMTP support means you can use any mail client and leave anytime. Some providers trade this away for stronger encryption.
- **custom domain**: Your address shouldn't be hostage to a provider. A domain you own means you can switch later without telling anyone.

#### Recommendations

##### Proton Mail · *the default pick*

`🇨🇭 switzerland` · `zero-knowledge` · `partially open source` · `audited` · `free tier`

The most technically robust encrypted provider available. Mail between Proton users is end-to-end encrypted automatically, everything at rest is zero-access, and the apps are polished enough that nobody in your family will complain. The wider ecosystem (Calendar, Drive, VPN, Pass, SimpleLogin aliases) makes it a clean one-stop Google exit, and the VPN bundle discount is genuinely good value.

Be clear-eyed about one thing: Proton has cooperated with Swiss court orders on the narrow data it does hold (IP logs, metadata) while consistently honoring its stated data-minimization policy. The cases that drew criticism involved user assumptions about data that was never claimed to be protected. Not a scandal; a threat-model calibration issue.

**Good:**
- Zero-access storage; E2EE between Proton users and via PGP
- Polished apps on every platform
- Custom domains, catch-all, and built-in aliasing on paid plans
- Long track record and regular independent audits

**Mind the:**
- No direct IMAP: desktop clients need Proton Bridge (paid plans)
- Will comply with Swiss courts for the metadata it does hold: calibrate accordingly
- VC-backed and increasingly commercial: worth monitoring, not currently a red flag
- Subject lines aren't encrypted (PGP limitation)

free tier · paid from ~€4/mo · [proton.me/mail →](https://proton.me/mail)

##### mailbox (formerly Mailbox.org) · *the standards pick*

`🇩🇪 germany` · `imap/smtp` · `pgp` · `paid`

For people who want privacy without leaving standard email behind. Rebranded from Mailbox.org to simply "mailbox" in September 2025, with product names Mail, Office, Meet, and Drive replacing the old branding; same German company (Heinlein Group), same data centers. Full IMAP/SMTP means Thunderbird, FairEmail, or anything else just works, no bridge, no lock-in. Optional PGP "Guard" encrypts mail at rest, and you get a full calendar/contacts/office suite for pocket change.

**Good:**
- Real IMAP/SMTP: use any client, migrate out anytime
- Cheap, transparent pricing; no free-tier upsell games
- Custom domains on every plan
- Boring in the best way: stable German company since the 90s

**Mind the:**
- Encryption at rest is opt-in, not the default
- Web interface looks dated next to Proton or Tuta
- No free tier (30-day trial only)

from ~€1/mo · [mailbox.org →](https://mailbox.org)

##### Tuta · *the all-in encryption pick*

`🇩🇪 germany` · `post-quantum` · `open source` · `free tier`

Tuta goes further than anyone on encryption: its own protocol covers subject lines, calendars, and contacts, and it's already rolling in post-quantum algorithms. The trade: you live inside Tuta's apps. If maximum encryption matters more to you than client choice, this is the one.

**Good:**
- Encrypts more than PGP can, including subject lines
- Very affordable paid plans; fair free tier
- Fully open-source clients
- Encrypted calendar included even on free

**Mind the:**
- No IMAP at all: official apps only
- No PGP interop with other encrypted providers
- Search and offline behavior can feel limited

free tier · paid from ~€3/mo · [tuta.com →](https://tuta.com)

##### Posteo · *the anonymity pick*

`🇩🇪 germany` · `anonymous signup` · `cash accepted` · `imap/smtp` · `paid`

No name, no phone number, and you can literally mail them cash. Posteo strips identifying data on purpose and keeps the price at a euro a month. The catch is philosophical consistency: no custom domains, because your address would link back to you.

**Good:**
- Truly anonymous signup and payment options
- IMAP/SMTP supported; optional full-storage encryption
- €1/mo, no tiers, no upsells

**Mind the:**
- No custom domains: by design, but a real lock-in trade-off
- 2GB base storage is small (expandable cheaply)
- Spartan web interface

€1/mo flat · [posteo.de →](https://posteo.de/en)

##### StartMail · *the alias-first pick*

`🇳🇱 netherlands` · `aliasing` · `imap/smtp` · `pgp` · `paid`

From the Startpage family, with aliasing as the headline feature: unlimited burner and custom aliases built straight into the inbox, no separate service to wire up. Standard IMAP/SMTP means any client works, and PGP is handled in the web interface for the rare correspondent who has it. The pragmatic pick if alias-per-signup is the habit you're building your email life around.

**Good:**
- Aliases are first-class: create and burn them inline as you sign up
- IMAP/SMTP support; custom domains available
- Simple one-tier pricing, EU jurisdiction

**Mind the:**
- Same System1 (ad-tech) ownership caveat as Startpage
- Encryption at rest is vault-based, not zero-access like Proton/Tuta
- No free tier; smaller ecosystem (no calendar/drive suite)

~$5/mo · [startmail.com →](https://www.startmail.com)

##### Disroot · *the nonprofit pick*

`🇳🇱 netherlands` · `nonprofit` · `imap/smtp` · `free`

Disroot isn't a company selling you a product: it's a nonprofit, ethically-run collective offering email alongside a wider suite of federated and open-source services (cloud storage, chat, calendars, and more), funded by donations rather than subscriptions. Standard IMAP/SMTP means any client works, and there's no upsell funnel because there's nothing being sold. The trade is the one you'd expect from volunteer-run infrastructure: no SLA, no support line, and storage limits are modest.

**Good:**
- Nonprofit, donation-funded: no ads, no data monetization incentive
- Free, with standard IMAP/SMTP access
- Part of a wider ethical-services suite beyond just email
- EU jurisdiction (Netherlands)

**Mind the:**
- No zero-access encryption at rest: trust is in the collective's ethics, not cryptography
- Volunteer-run: no formal SLA or paid support
- Modest default storage; donations keep the lights on, so consider chipping in

free, donation-funded · [disroot.org →](https://disroot.org)

#### PGP tools

PGP (through the OpenPGP standard) is how you get **true end-to-end encryption over plain email**, independent of any provider on this page. You hold a key pair, your contact holds theirs, and whoever sits in the middle only ever sees ciphertext. The fine print: PGP encrypts message bodies and attachments, but subject lines, addresses, and most headers stay readable on every server your mail crosses.

One more thing to know before the entries below: **the standard itself has split**. The IETF published a modernized OpenPGP spec (RFC 9580) in 2024, but GnuPG broke away and follows LibrePGP, a competing fork by GnuPG's own founder, and so do the tools built on it and on the RNP library. The two formats aren't fully interoperable at the newer edges (v5 and v6 key fingerprints look similar but are calculated differently). It's a genuine standards dispute, not one side being wrong; just know which side your tools sit on.

##### GnuPG · *the reference implementation*

`all platforms` · `pgp` · `open source` · `free`

GnuPG is the program nearly everything else in this section wraps. It handles key generation, signing, and encryption from the command line, and when a mail client or a package manager verifies a signature, **GnuPG is usually doing the work underneath**.

**Good:**
- Preinstalled or one package away on practically every Linux distribution
- The code Gpg4win and GPG Suite build on directly
- Experimental post-quantum support already landing in the 2.5 branch

**Mind the:**
- Follows LibrePGP, not the IETF's RFC 9580: the standards split above starts here
- The 2.4 branch reaches end of life in mid-2026 per GnuPG's own release notes; check gnupg.org before installing

free · open source · [gnupg.org →](https://gnupg.org)

##### Gpg4win · *the windows pick*

`windows only` · `pgp` · `open source` · `free`

Gpg4win packages GnuPG for Windows together with Kleopatra, a graphical key manager, plus GpgOL, its plugin for Outlook. It's the **official Windows distribution of GnuPG**: you get the reference cryptography without touching a terminal.

**Good:**
- Kleopatra handles keys graphically; no command line needed
- Developed with GnuPG's own maintainers, with historical funding from Germany's BSI
- The classic desktop Outlook plugin (GpgOL) is the original, mature one

**Mind the:**
- The GpgOL/Web add-in for the new web-based Outlook is still labeled experimental by Gpg4win itself
- That web add-in only supports standard Microsoft 365 accounts so far
- Inherits GnuPG's LibrePGP side of the standards split

free · open source · [gpg4win.org →](https://gpg4win.org)

##### GPG Suite · *the macos option*

`macos only` · `pgp` · `free tier`

GPG Suite brings GnuPG to macOS with GPG Keychain for managing keys and GPG Mail, a plugin that adds OpenPGP to Apple Mail. Go in with eyes open: **the Mail plugin's recent track record is bumpy**.

**Good:**
- GPG Keychain and the command-line tools are free
- GPG Mail works on macOS Sequoia 15.5+, GPGTools' own recommended setup
- A Tahoe-compatible beta already exists

**Mind the:**
- macOS Tahoe currently crashes Apple Mail around certain GPG Mail banners; GPGTools recommends avoiding Tahoe if you rely on it daily
- GPG Mail is paid, and version 8 is a paid upgrade even for existing support-plan holders
- Users have publicly asked whether the project is still maintained; a maintainer responds, but the communication gap is real

free core · paid mail plugin · [gpgtools.org →](https://gpgtools.org)

##### OpenKeychain · *the android standby*

`android only` · `f-droid` · `pgp` · `open source` · `free`

OpenKeychain manages OpenPGP keys on Android and exposes an API that other apps plug into. You keep your keys in one place and let your mail client call out to it for signing and decryption. It still works, and it's still the standard on Android; **it just stopped growing**.

**Good:**
- Still the supported path in Thunderbird for Android's (formerly K-9 Mail) own official docs
- One place for your keys instead of per-app copies
- Still receives security fixes and basic upkeep

**Mind the:**
- In official maintenance mode since August 2021: no new features, per the project's own README
- Last stable release landed in February 2024

free · open source · [openkeychain.org →](https://www.openkeychain.org)

##### Thunderbird · *the low-friction pick*

`desktop app` · `pgp` · `open source` · `free`

Thunderbird has had OpenPGP built in since version 78 in 2020, with **no separate GnuPG install required**. For most people this is the lowest-friction way to actually use PGP.

**Good:**
- No GnuPG, no plugin: OpenPGP ships in the client
- Sidesteps the Outlook and Apple Mail plugin problems above entirely
- You turn it on in account settings and manage keys inside the client

**Mind the:**
- Uses the RNP library, which follows LibrePGP: the standards note at the top of this section applies here too
- Desktop only: on Android, Thunderbird hands OpenPGP to OpenKeychain instead

free · open source · [thunderbird.net →](https://www.thunderbird.net)

#### Worth knowing

- **Get a domain before you migrate.** A you@yourdomain.com address means you can change providers in an afternoon without updating a single account. It's the cheapest insurance on this page.
- **Don't hand your address to everyone.** Pair your provider with an aliasing service (SimpleLogin, addy.io, or the aliasing built into Proton's paid plans and StartMail): a unique alias per signup means leaks are traceable and revocable.
- **Pick a recovery address outside your main ecosystem.** A free account at an ethically run independent provider like Disroot makes a solid recovery/backup address, meaningful redundancy without re-concentrating everything in one company's hands.
- **Migrate in layers.** Forward your old inbox to the new one, move important accounts first (banks, government, recovery emails), and let the long tail update itself over a few months. Nobody actually does it in one weekend.
- **Email ≠ secure messaging.** If the content truly can't leak, it belongs in a private messenger, not an inbox.

---

### Social Media

> Mainstream social media (Twitter/X, Instagram, YouTube, TikTok) runs on the same trade: you get a free feed, the platform gets your attention, and an algorithm decides what you see in order to maximize it. The alternatives here are decentralized and non-corporate: you own your account, nobody is optimizing your feed for engagement, and no single company can sell access to your attention.

**before you pick:** Federation means no single company can flip a switch and delete the whole network, but it also means moderation quality varies by server. You're not just picking an app, you're picking a community run by whoever operates that instance. Read their rules before you commit your account to one.

**What matters here:**
- **federation / activitypub**: No single company owns the network. Servers run by different people and organizations talk to each other over a shared protocol.
- **no algorithmic engagement feed**: Chronological or user-controlled timelines, not a black-box ranking system tuned to maximize time-on-app.
- **data portability**: Can you take your followers and posts with you if you move servers? Real portability means no instance can hold your social graph hostage.
- **instance moderation quality**: Federation pushes moderation down to individual server admins. A good network of well-run instances beats one big company's policy team, but only if you pick a well-run instance.

#### Recommendations

##### Mastodon · *the default pick*

`federated` · `no algorithmic feed` · `open source` · `free`

The closest thing to a Twitter/X replacement that isn't owned by anyone in particular. Mastodon is software anyone can run, and the servers ( instances ) that run it talk to each other over ActivityPub, so following someone on a different server works the same as following someone on your own. Timelines are chronological, not algorithmically ranked, and you can migrate your account (followers included) to another instance if yours goes downhill.

Instance choice matters more here than with any centralized platform: it determines your moderation experience, your default visibility, and who technically has admin access to your account.

**Good:**
- Federated: no single company can shut down the whole network
- Founder stepped down as CEO in a planned move to nonprofit governance, reinforcing that no single company owns it
- Chronological timeline, no engagement-optimized algorithm
- Account migration tools let you move instances without losing followers
- Open source, large and active developer community

**Mind the:**
- Moderation quality and culture vary a lot between instances
- Discovery is weaker than algorithm-driven platforms; growth takes more effort
- Active users have fallen to under 1M, well behind Bluesky's 40M+ registered users
- Picking an instance is an extra decision newcomers don't expect

free, instance-dependent · [joinmastodon.org →](https://joinmastodon.org)

##### Lemmy · *the reddit-alternative pick*

`federated` · `no algorithmic feed` · `open source` · `self-hostable` · `free`

Lemmy plays the role Reddit plays (link aggregation and threaded discussion organized into communities) but federated across independently run instances rather than owned by one company. Communities ("magazines"-style subforums) federate across servers, so subscribing to a community on someone else's instance works the same as a local one. No ad-driven feed ranking; sorting is by votes, new, or active, same as the platform it replaces.

**Good:**
- Federated communities: no single company controls the forums
- No algorithmic feed; sorting is transparent (hot/new/top)
- Open source and self-hostable

**Mind the:**
- Much smaller user base than Reddit; fewer communities have critical mass
- Instance moderation and defederation decisions vary widely
- Some niche communities simply don't exist yet

free, instance-dependent · [join-lemmy.org →](https://join-lemmy.org)

##### PeerTube · *the youtube-alternative pick*

`federated` · `no algorithmic feed` · `open source` · `self-hostable` · `free`

Federated video hosting: any instance can host and publish videos, and instances federate so you can browse and subscribe to channels across servers from one account. No recommendation algorithm chasing watch-time: what you see is what creators on your subscriptions and instance actually posted. Some instances use peer-assisted (WebTorrent-based) delivery to spread bandwidth cost across viewers rather than one company's CDN bill.

**Good:**
- Federated hosting: no single company decides what gets demonetized or removed network-wide
- No engagement-optimized recommendation algorithm
- Open source, self-hostable, peer-assisted streaming reduces single points of cost

**Mind the:**
- Catalog and creator base are tiny next to YouTube
- Video quality/availability depends on the hosting instance's resources
- Discovery across instances is clunkier than a unified platform

free, instance-dependent · [joinpeertube.org →](https://joinpeertube.org)

##### Pixelfed · *the instagram-alternative pick*

`federated` · `no algorithmic feed` · `open source` · `free`

Photo-first sharing built on the same federated model as Mastodon: ActivityPub means a Pixelfed account can be followed from Mastodon and vice versa for basic interactions. The feed is chronological by default, not an algorithm deciding which posts you're "likely to engage with," and there's no ad business model driving design decisions toward maximizing scroll time.

**Good:**
- Federated, interoperates with the wider Fediverse via ActivityPub
- Chronological timeline, no engagement-ranking algorithm
- No ad-driven business model shaping the feed

**Mind the:**
- Effectively a single-founder project (Daniel Supernault); a real bus-factor risk
- Smaller network: fewer accounts to follow than Instagram
- Mobile app polish lags behind the platform it replaces
- Instance choice affects storage limits and moderation, same as Mastodon

free, instance-dependent · [pixelfed.org →](https://pixelfed.org)

#### Worth knowing

- **These are all part of the Fediverse.** Mastodon, Lemmy, PeerTube, and Pixelfed all speak ActivityPub to varying degrees, which means they interoperate: you can often follow a PeerTube channel or a Pixelfed account from a Mastodon account, for instance. It's a network of networks, not one app.
- **Picking an instance matters as much as picking the app.** Read the instance's rules and moderation history before you commit your account to it. A small, well-moderated instance is usually a better experience than a huge, under-moderated one.
- **Account migration tools exist.** Mastodon in particular lets you move your account (including your follower list) to a different instance if the one you're on changes hands, shuts down, or just isn't a good fit anymore. That portability is the whole point of federation.

---

### Communities

> Discord alternatives for community and group spaces: servers, channels, voice chat, for people who'd rather not hand every conversation their community has to a single ad-funded company.

**before you pick:** This is a deliberately thin category. Most of the genuinely interesting privacy options for group chat (fully federated or no-server-trust designs) already have full write-ups under Messengers. What's listed here is specifically aimed at the Discord-shaped use case: persistent servers, channels, and voice for a community.

**What matters here:**
- **ownership / self-hosting**: Can your community run its own server, or are you still trusting one company's infrastructure and policies?
- **encryption**: What's protected in transit and at rest, and who holds the keys if anyone does.
- **data retention**: How long messages, voice metadata, and member lists sit on a server you don't control.

#### Recommendations

##### Stoat · *the discord-alternative pick*

`self-hostable` · `open source` · `free`

Stoat (formerly Revolt) aims at the same shape of problem Discord solves: persistent community servers with channels, roles, and voice, without requiring everyone's conversations to live in one company's infrastructure forever. Built in Europe under EU data protection law, with a public codebase and a privacy policy short enough to actually read. Communities can run their own instance, which means moderation policy and data retention are decided by the people actually running the server, not by a platform-wide policy team.

**Good:**
- Self-hostable: communities can own their own infrastructure
- Familiar server/channel/voice structure for groups migrating off Discord
- Open source codebase

**Mind the:**
- Smaller ecosystem and community than Discord, fewer bots/integrations
- Self-hosting shifts moderation and uptime responsibility onto whoever runs the server
- Less independently audited than longer-established messengers

free, self-hosting optional · [stoat.chat →](https://stoat.chat)

##### Fluxer · *the discord-alternative pick*

`🇸🇪 sweden` · `open source` · `free tier`

Fluxer is another community-chat platform built explicitly as a Discord alternative: made in Sweden, fully open source under AGPLv3, with the usual server/channel/voice/video/screen-share layout but a privacy-respecting design ethos: less telemetry, no selling user data, and an explicit promise not to feed conversations into generative-AI training. Still in public beta, but a good fit for a group that wants the Discord experience without the data-collection baggage.

**Good:**
- Privacy-respecting defaults: minimal telemetry and data retention
- Familiar community/voice structure for easy migration
- Open source

**Mind the:**
- Much smaller user base and integration ecosystem than Discord
- Younger project, less battle-tested at scale
- Feature parity with Discord (bots, integrations) still catching up

free, freemium tiers in beta · [fluxer.app →](https://fluxer.app)

#### Worth knowing

- **Want no-server-trust instead of just "Discord, but nicer"?** If what you actually need is a fully federated or zero-server-trust option, not just an alternative company running the same kind of server, look at Matrix/Element or SimpleX Chat under Messengers. Both already do group chat and voice and go further on the trust model than anything in this category.

---

### Frontends

> You don't need an account, an app, or an ad profile to watch a YouTube video or read a Reddit thread. Frontends are alternative interfaces to the big platforms: same content, different window, none of the tracking scripts.

**before you pick:** Frontends live in a cat-and-mouse game with the platforms they read from. Google has been blocking Invidious instances at the IP level since 2024, Reddit spent mid-2026 closing its anonymous access paths, and X killed Nitter's original approach outright in 2024 (it took a year to come back). Treat any single public instance as disposable and keep fallbacks.

**What matters here:**
- **where it runs**: A public web instance sees your traffic; a local app like FreeTube or NewPipe keeps everything on your device. When you have the choice, local wins.
- **instance trust**: Whoever hosts an instance can log what you read and watch. You're swapping Google's logging for a volunteer's, so pick maintained instances or self-host.
- **breakage risk**: Frontends scrape or use unofficial APIs. When the platform changes something, the frontend breaks until the maintainers catch up.
- **feature parity**: Subscriptions, playlists, and history can live locally with no account. Posting, voting, and comments mostly can't.

#### The tools

##### LibRedirect · *start here*

`browser extension` · `open source` · `free`

LibRedirect is a browser extension that automatically rewrites links to the big platforms so they open in a privacy frontend instead. You click a YouTube link and land on Invidious; you click a Reddit thread and land on Redlib. It's **the glue that makes the rest of this page usable day to day**.

**Good:**
- Covers far more than video and Reddit: Wikipedia, TikTok, Medium, translation, maps, search
- Per-service instance lists update automatically from a dedicated repo
- You can set your own instances and fallbacks per service

**Mind the:**
- Broken on Chrome: Manifest V3 disabled it, and the maintainers recommend Firefox or Brave instead
- Two-person team in maintenance mode; no timeline for a Chrome-compatible rewrite
- Only as good as the instances it points at: keep two or three per service

free · open source · [libredirect.github.io →](https://libredirect.github.io)

##### Redlib · *the reddit pick*

`web-based` · `self-hostable` · `open source` · `free`

Redlib is a lightweight Reddit frontend and the actively maintained successor to Libreddit. You browse subreddits and threads with **no account, no ads, and no infinite-scroll tricks**. You can't post or vote through it; it's for reading.

**Good:**
- Server-rendered pages with zero client-side JavaScript
- Spoofs OAuth tokens from Reddit's official Android app, refreshed every 24 hours like the real thing
- Survived Reddit's mid-2026 crackdown, plausibly because it never relied on the killed `.json` endpoints
- Community instance list updates automatically

**Mind the:**
- Read-only by design: no posting, voting, or commenting
- Reddit keeps gating more communities behind login, and no frontend can reach past a server-side gate
- The instance inherits Reddit's rate limits on its own IP, so heavy shared use is visible to Reddit

free · open source · [github.com/redlib-org →](https://github.com/redlib-org/redlib)

##### Invidious · *the full-interface pick*

`web-based` · `self-hostable` · `open source` · `free`

Invidious is a web frontend for YouTube that plays videos **without ads or tracking scripts**. Pick it when you want the whole experience in a browser; pick Piped when you just want playback that degrades gracefully.

**Good:**
- The fullest interface here: comments, channel pages, playlists
- Local accounts keep subscriptions without touching Google
- RSS feeds per channel
- Still actively developed, with recent stable releases

**Mind the:**
- Google has blocked it at the IP level since 2024: captchas, throttling, blacklists
- Most public instances lock registration just to control the load
- A self-hosted personal instance works better than any public one

free · open source · [invidious.io →](https://invidious.io)

##### Piped · *the self-host pick*

`web-based` · `self-hostable` · `open source` · `free`

Piped is a YouTube frontend split into a frontend, a backend, and a proxy layer, so the video stream reaches you through the instance rather than straight from Google's servers. Treat it as something you self-host, not something you find a public instance for.

**Good:**
- The proxy layer **degrades more gracefully than Invidious** when Google blocks a request
- Local subscriptions and playlists, importable from a Google takeout
- Your traffic never touches Google's servers directly

**Mind the:**
- Public instances have decayed to the point that LibreTube dropped support for them entirely in 2026
- Self-hosting is effectively the only reliable way to run it

free · open source · [github.com/TeamPiped →](https://github.com/TeamPiped/Piped)

##### FreeTube · *the desktop pick*

`desktop app` · `local-first` · `open source` · `free`

FreeTube is a desktop app for YouTube on Windows, macOS, and Linux. Subscriptions, history, and playlists live in **local files on your machine** rather than on anyone's server. If you watch YouTube at a desk, this is the comfortable option.

**Good:**
- Everything stays in local files; there's no server side to trust
- Built-in extractor by default, with Invidious as an optional primary or fallback
- Official installers for all three desktop platforms
- LibRedirect can route YouTube links straight into it

**Mind the:**
- Still labeled Beta by the project itself: honest, not alarming, but set expectations
- Desktop only; pair it with NewPipe or LibreTube on the phone
- Same extractor arms race as every YouTube frontend

free · open source · [freetubeapp.io →](https://freetubeapp.io)

##### NewPipe · *the android pick*

`android only` · `f-droid` · `open source` · `free`

NewPipe is the long-standing Android frontend for YouTube. It streams without ads and keeps subscriptions on the device, with no Google account involved. You install it from F-Droid or its own repository, not the Play Store.

**Good:**
- Background play and picture-in-picture **without Premium**
- Downloads video and audio straight to the device
- Also reads SoundCloud, PeerTube, Bandcamp, and media.ccc.de

**Mind the:**
- YouTube gets most of the maintenance attention; the project is openly seeking co-maintainers for SoundCloud and PeerTube
- Not on the Play Store (it breaks YouTube's ToS), so updates come from F-Droid or its own repo
- Breaks when YouTube changes things, until a fix ships

free · open source · [newpipe.net →](https://newpipe.net)

##### LibreTube · *the android alternative*

`android only` · `f-droid` · `open source` · `free`

LibreTube is a newer Android client for YouTube with a more modern Material design than NewPipe. It started life on the Piped backend, but its **Full Local Mode** now talks to YouTube directly through the NewPipe Extractor library, so it no longer depends on public instances.

**Good:**
- Full Local Mode makes it fully independent of the public Piped network
- Same no-account subscription model, wrapped in a current Material design
- Development is healthy, and F-Droid is the recommended install path
- Can still point at a self-hosted Piped instance if you run one

**Mind the:**
- Dropped public Piped instance support because none were reliably working
- Shorter track record than NewPipe
- Same extractor arms race as NewPipe: the two share the library

free · open source · [libretube.dev →](https://libretube.dev)

##### Nitter · *the comeback*

`web-based` · `open source` · `free`

Nitter is the X/Twitter frontend, and it has had the roughest ride on this page. X shut off its guest-account trick on January 28, 2024 and the project was declared dead; then the original maintainer **resumed development in February 2025**, and public instances work again for browsing X accounts without logging in.

**Good:**
- Development resumed under the original maintainer: merged fixes and an updated Docker image, not a token revival
- Public instances verifiably work again; you browse without an account
- The account-token burden sits with the instance operator, not with you

**Mind the:**
- Running an instance now requires a real X account for its session tokens
- Far fewer public instances than before the 2024 shutdown
- **The platform controls the tap**, and it has already turned it off once

free · open source · [github.com/zedeus/nitter →](https://github.com/zedeus/nitter)

#### Worth knowing

- **Local beats hosted.** If a native app exists for your platform, prefer it over a public web instance: your watch history never leaves the device and there's no third party to trust.
- **Never log in through a frontend.** Frontends are for reading. If a page asks for your platform credentials, you're either on the wrong site or about to hand your password to a stranger.
- **Use the projects' own instance lists.** No trustworthy cross-tool instance tracker exists, so lean on each project's own list (LibRedirect and Redlib update theirs automatically). Add two or three instances per service to LibRedirect so a dead one is an annoyance instead of a dead end.
- **This shifts trust; it doesn't erase it.** A public instance host sees your IP and your requests even when your browser runs no tracking scripts, and the platform can see the instance in turn: a Redlib instance inherits Reddit's rate limits on its own IP, so heavy shared use is visible to Reddit. Pair instances with a VPN if that bothers you, or stick to the local apps.

---

## Data & Files

### Cloud Storage & Sync

> Google Drive and Dropbox can read every file you give them: that's how search, previews, and "smart" features work. The alternatives either encrypt before upload so the provider holds ciphertext, or skip the provider entirely and sync device-to-device.

**before you pick:** Sync is not backup. Sync faithfully replicates your mistakes: delete a file or catch ransomware, and every copy follows. Whatever you choose here, keep one versioned backup that isn't part of the sync loop (an external drive plus something like BorgBackup or restic does fine).

**What matters here:**
- **encryption model**: End-to-end means the provider stores ciphertext and can't read your files. "Encrypted at rest" without E2EE means they hold the keys.
- **cross-platform reality**: Not the platform list on the pricing page: the actual client quality on each. A "supported" OS with a half-working client isn't supported.
- **sharing & access**: Encrypted storage you can't share links from sends people back to Google. Check the collaboration story matches your life.
- **company viability**: Your files should outlive the vendor's funding round. Smaller companies can be excellent, as long as you keep local copies regardless.

#### Recommendations

##### Filen · *the default pick*

`🇩🇪 germany` · `zero-knowledge` · `e2ee` · `all platforms` · `free tier`

Zero-knowledge, end-to-end encrypted, genuinely cross-platform (Linux included) and priced more competitively than almost everything in the category. Development pace is slower than a VC-backed product, but the core is solid and the team's communication is unusually transparent: public roadmap, active community, real responsiveness. This is what the default cloud should look like.

**Good:**
- Zero-knowledge E2EE by design, on every plan including free
- Proper clients across Windows/macOS/Linux/mobile
- Aggressive recurring pricing on the tiers still on sale
- Public roadmap and a team that answers questions like people

**Mind the:**
- Lifetime plans are gone: Pro Lifetime sold out, Starter Lifetime paused with no promised return
- Smaller company, slower release cadence
- Long-term viability is the bet, so keep local backups regardless (you should anyway)
- Collaboration features are thinner than the big suites

10GB free · paid from ~€2/mo · [filen.io →](https://filen.io)

##### Tresorit · *the premium pick*

`🇨🇭 switzerland` · `e2ee` · `audited` · `free tier`

Polished, enterprise-grade, and thoroughly audited, with the best cross-platform client quality in the E2EE space: notably better than Proton Drive on reliability across systems. The edge is consistency: everything works, everywhere, all the time. You pay for that edge; if Filen's pace or size gives you pause, this is the premium answer.

**Good:**
- Reference-quality E2EE clients on every platform
- Long audit history; Swiss jurisdiction (Swiss Post ownership)
- Granular sharing, permissions, and team features that actually work
- Free Basic plan now exists (3GB, 500MB file limit, 2 devices)

**Mind the:**
- Priciest entry on this page by a clear margin
- Enterprise focus, so personal plans feel like a side door
- Free tier is real but tight: small storage and a 500MB file-size cap

free 3GB Basic · paid from ~$14/mo · [tresorit.com →](https://tresorit.com)

##### Syncthing · *the no-cloud pick*

`peer-to-peer` · `open source` · `no account` · `free`

Files sync directly between your devices, encrypted in transit, and no third party ever holds a copy. No account, no quota, no subscription: it just quietly keeps folders identical across your laptop, phone, and that Raspberry Pi. Pairs beautifully with a KeePassXC vault, an Obsidian vault, or a notes folder.

**Good:**
- No server, no provider, nothing to subpoena or breach
- Unlimited by design: your disks are the quota
- File versioning per folder if you turn it on
- Open source with a decade of stability

**Mind the:**
- Two devices must be on(line) to sync; an always-on node fixes this
- No web access or share links: it's sync, not a cloud drive
- Android app is fine; iOS support is via a third-party app (Möbius Sync)

free, open source · [syncthing.net →](https://syncthing.net)

##### Proton Drive · *the ecosystem pick*

`🇨🇭 switzerland` · `e2ee` · `free tier`

A normal-feeling cloud drive where everything is end-to-end encrypted: files, names, share links, photo backups. If you're already paying for Proton Mail, it's effectively included and worth using for photos and sharing. As a standalone primary it's harder to recommend right now: feature rollout is slow and Linux support is notably poor (no sync client), which rules it out as a practical primary for anyone on Linux.

**Good:**
- E2EE by default with zero configuration
- Password-protected, expiring share links
- Mobile photo backup that replaces Google Photos for storage
- Effectively free if you're on a Proton bundle anyway

**Mind the:**
- Still no Linux sync client (web/CLI only for now), though Proton has confirmed a native one is in active development
- Slow feature cadence compared to the rest of the Proton suite
- E2EE means no server-side search inside file contents

5GB free · 200GB from ~€4/mo · [proton.me/drive →](https://proton.me/drive)

##### Cryptomator · *the keep-your-cloud pick*

`e2ee` · `open source` · `audited` · `no account` · `free tier`

Not storage: a transparent encryption layer for storage you already have. Point it at Dropbox, Google Drive, or OneDrive and it creates a vault the provider sees only as encrypted noise. The pragmatic answer when work, family, or inertia keeps you on a big-tech cloud but the contents are nobody's business.

**Good:**
- Makes any cloud zero-knowledge after the fact
- Open source with published independent audits
- Desktop apps free; no account, no subscription

**Mind the:**
- Encrypted files can't use the provider's web preview/search/sharing
- Mobile apps are a one-time purchase (~€30, up from ~€15 before Jan 2026)
- Filename/structure metadata protection has limits; read their docs

desktop free · mobile ~€30 one-off · [cryptomator.org →](https://cryptomator.org)

##### Nextcloud · *the self-hosted pick*

`self-hostable` · `open source` · `e2ee optional` · `free`

Not just storage: a full self-hosted cloud suite covering files, calendar, contacts, and office docs, all on hardware you control entirely. Open source from top to bottom. The trade-off is real: you become the sysadmin, and a neglected instance is worse than the big-tech cloud you left. Worth it if you want full control and don't mind the setup work; a turnkey option above is the better fit otherwise.

**Good:**
- You own the server, the data, and the jurisdiction entirely
- Replaces files, calendar, contacts, and office docs in one suite
- Open source with a large plugin/app ecosystem

**Mind the:**
- You are the security team: updates, backups, exposure are on you
- More setup work than any turnkey option on this page
- E2EE is available but is opt-in and less seamless than dedicated E2EE clouds

free, open source (self-hosted) · [nextcloud.com →](https://nextcloud.com)

##### pCloud · *the lifetime-plan pick*

`🇨🇭 switzerland` · `one-time purchase` · `e2ee optional` · `free tier`

Best known for genuinely unusual lifetime plans (pay once, keep the storage). Switzerland is the company's legal home (Swiss FADP applies), but it's not a storage location: data actually lives in Dallas (US) or Luxembourg (EU), whichever region you pick. Client-side encryption exists, but it's a paid add-on, not the default: out of the box, pCloud is encrypted-at-rest like Dropbox, not zero-knowledge. Turn on the encryption add-on if you want the privacy story to match the marketing.

**Good:**
- Lifetime plans are a real, rare differentiator
- Swiss jurisdiction (FADP) for the company itself
- Client-side "Crypto" encryption available as an add-on

**Mind the:**
- No Swiss data center: storage regions are US (Dallas) or EU (Luxembourg) only
- Client-side encryption is not on by default: it's a separate paid add-on
- Without that add-on, pCloud can read your files like any standard cloud
- Lifetime plans bet on the company's longevity for a very long time

10GB free · lifetime plans available · [pcloud.com →](https://pcloud.com)

##### Mega NZ · *the generous-free-tier pick*

`e2ee` · `free tier`

A genuinely generous free tier and client-side, "zero-knowledge" encryption claims that hold up technically. The honest caveat is the company's history: Mega has a checkered ownership and legal past, tracing back to Kim Dotcom and years of associated controversy. The current technical encryption claims stand on their own merits, but the ownership history is worth knowing before you trust it with anything sensitive.

**Good:**
- 20GB free tier is among the most generous in the category
- Client-side encryption with reasonable technical claims
- Cross-platform clients including Linux

**Mind the:**
- Checkered ownership/legal history (Kim Dotcom era), worth knowing even if unrelated to current crypto
- Less independent audit history than Tresorit or Cryptomator
- Sharing features can undercut the zero-knowledge story if used carelessly

20GB free · paid tiers available · [mega.nz →](https://mega.nz)

##### Ente Photos · *the photos pick*

`e2ee` · `open source` · `free tier`

End-to-end encrypted photo backup specifically, not general file storage. From the same team as Ente Auth, with the same open source, audited-encryption approach applied to photo libraries. The most complete answer to "I want to leave Google Photos but keep automatic, encrypted backup" available right now.

**Good:**
- End-to-end encrypted photo and video backup, automatic on mobile
- Open source clients and server
- From the same team behind Ente Auth: consistent track record

**Mind the:**
- Photos and videos only, not a general file-storage replacement
- Smaller free tier than dedicated general-purpose clouds

10GB free · paid tiers available · [ente.io →](https://ente.io)

##### IceDrive · *verify before trusting*

`client-side encryption option` · `proprietary crypto` · `not independently audited` · `cheap`

Cheap, with a client-side encryption option on paper. The catch: that encryption implementation is proprietary and hasn't received the kind of independent audit that Cryptomator or Tresorit have, and it's drawn real scrutiny and skepticism in the privacy community as a result. It exists, it's affordable, and some people use it without issue, but verify the crypto claims yourself before trusting it with anything sensitive.

**Good:**
- Inexpensive plans with a client-side encryption option
- Reasonably polished apps across platforms

**Mind the:**
- Proprietary crypto implementation, not independently audited like the established E2EE players
- Privacy community skepticism specifically around the encryption claims
- Treat as "exists and is cheap" rather than a strong recommendation for sensitive files

low-cost plans · [icedrive.net →](https://icedrive.net)

##### Internxt · *verify before trusting*

`🇪🇸 spain` · `zero-knowledge` · `post-quantum` · `audited` · `free tier`

Spain-based, with zero-knowledge encryption claims and marketing around post-quantum readiness. Independently audited twice by Securitum, most recently August 2025 (web, desktop, mobile, and cloud infrastructure, no major flaws found), and open source on both the client and server. Holds GDPR, ISO 27001, SOC 2, and HIPAA certifications.

**Good:**
- Zero-knowledge encryption claims, with post-quantum cryptography marketing
- Independently audited twice by Securitum, most recently Aug 2025, no major flaws found
- Fully open source: both client and server code
- EU-based (Spain), competitive pricing; GDPR, ISO 27001, SOC 2, HIPAA certified

**Mind the:**
- Smaller company than the established players on this page
- Bold claims (post-quantum, zero-knowledge) still benefit from continued outside scrutiny

free tier · paid plans available · [internxt.com →](https://internxt.com)

#### Worth knowing

- **Mix and match: these aren't rivals.** Filen for the cloud layer, Syncthing for working folders, Cryptomator over the Dropbox your family insists on. Each covers a different shape of problem, and using Filen as the sync backend for a notes app (see Notes ) keeps your vendor count down.
- **The 3-2-1 rule still applies.** Three copies, two media, one off-site. An E2EE cloud counts as the off-site copy; a versioned external drive covers the ransomware case sync can't, and doubles as your hedge on any smaller provider's longevity.
- **Self-hosting is a different page of trade-offs.** Nextcloud replaces a whole Google Workspace on hardware you control, but you become the security team, and a neglected instance is worse than the cloud you left. Worth it for some; know what you're signing up for.
- **Photos are the real lock-in.** They're the biggest dataset and the most personal one. Filen and Proton Drive both do mobile photo backup; Ente Photos (E2EE, from the Ente Auth people) is the dedicated-photos answer.

---

### Notes

> Notes are where your unfiltered thinking lives: drafts, plans, journals, passwords you swore you'd move to the vault. Most note apps sync all of it in plaintext to someone else's analytics pipeline. The fix is either end-to-end encryption or keeping notes local, ideally both, split by purpose.

**before you pick:** The two picks here aren't rivals; they're layers. An E2EE notes app for the quick-capture, everywhere-synced stuff; a local-first vault for structured, long-form thinking. Trying to force one tool to do both jobs is how people end up back on Google Keep.

**What matters here:**
- **encryption model**: E2EE means the sync server holds ciphertext. "Encrypted in transit" is not that; it just means HTTPS, which everything has.
- **data ownership**: Local files in an open format (Markdown) survive any company's death. A proprietary cloud database survives exactly as long as the subscription.
- **export honesty**: Can you get everything out, with formatting and attachments, in one operation? Test it before you've written ten thousand notes, not after.
- **audit status**: Encryption claims need outside eyes. Both encrypted picks here publish independent audits: that's the bar.

#### Recommendations

##### Notesnook · *the encrypted-sync pick*

`e2ee` · `open source` · `audited` · `all platforms` · `free tier`

The current best answer for encrypted cloud notes: open source, E2EE by design rather than as a feature, independently audited, and priced competitively with Standard Notes while offering a more capable featureset: rich text, notebooks, tags, web clipping, publishing. This is the everywhere-synced, quick-capture layer of the stack. Pricing now splits into three paid tiers (Essential, Pro, Believer) instead of one flat Pro plan.

**Good:**
- E2EE on everything including attachments: zero-knowledge sync
- Open source clients and server, with published audits
- More features than the established alternative, at a comparable price
- Proper export (Markdown/HTML) when you want out

**Mind the:**
- Smaller and less battle-tested historically than Standard Notes
- Free tier is genuinely limited (no sync of attachments, fewer notebooks)
- Search inside E2EE data has the usual speed limits

free tier · paid $1.99-8.99/mo (3 tiers) · [notesnook.com →](https://notesnook.com)

##### Obsidian · *the local-first pick*

`local-first` · `closed source` · `free tier`

For structured, long-form, interlinked thinking, a knowledge base built on plain Markdown files sitting in a folder you own. Closed source, but local-first blunts most of what that usually costs: your data never has to touch their servers at all. Sync the vault through Filen or Syncthing to keep the storage layer consistent with the rest of your stack instead of adding another vendor.

**Good:**
- Your notes are files: readable by anything, forever
- Backlinks, graph view, and a plugin ecosystem with no ceiling
- Free for personal use; works fully offline
- E2EE official sync exists if you'd rather pay than self-sync

**Mind the:**
- Closed source: local-first mitigates, doesn't erase, the trust question
- Plugins are third-party code with vault access; install with judgment
- Mobile capture is heavier than a dedicated quick-notes app

free personal · sync add-on ~€4/mo (or diy) · [obsidian.md →](https://obsidian.md)

##### Standard Notes · *the established pick*

`e2ee` · `open source` · `audited` · `free tier`

The elder statesman of encrypted notes: a decade of E2EE, multiple published audits, and a deliberately boring reliability record, now under Proton's roof. The honest comparison: more expensive and less capable than Notesnook for most people. It earns its slot on track record and on the longevity reassurance of its new ownership.

**Good:**
- Longest E2EE track record in the category, repeatedly audited
- Proton acquisition answers the small-company longevity question
- Free tier does unlimited plain-text notes, synced

**Mind the:**
- Features live behind the priciest subscription on this page
- Free tier is plain text only: no formatting at all
- Development cadence has been sedate for years

free tier · paid from ~€7/mo · [standardnotes.com →](https://standardnotes.com)

##### Logseq · *the open-source outliner pick*

`local-first` · `open source` · `free`

The open-source counterpart to Obsidian: local-first Markdown (or org-mode) with an outliner model: everything is a bullet, days are the default unit, and structure emerges from linking rather than folders. As of May 2026 the project split in two: this is "Logseq OG," the original file-based Markdown app. A separate, newer database-backed "Logseq" now exists with its own (faster) development pace, but it's a different app with a $15/mo sponsor tier required for its new sync and mobile apps. If Obsidian's closed source bothers you, or daily journaling is your entry point to notes, the Markdown version covered here is still a reasonable place to start.

**Good:**
- Fully open source and local-first: no trust questions at all
- Outliner + daily-notes workflow is excellent for journaling
- Same file-based freedom: sync with Syncthing/Filen, export is just files

**Mind the:**
- This Markdown version ("Logseq OG") is now maintenance-only and feature-frozen; it never reached 1.0
- The newer database-backed "Logseq" is actively developed but needs a $15/mo sponsor tier for sync and mobile
- The outliner model genuinely isn't for everyone, try before committing
- Mobile apps trail desktop in polish

free, open source · [logseq.com →](https://logseq.com)

##### Joplin · *the bring-your-own-sync pick*

`open source` · `e2ee optional` · `local-first` · `free`

Open source, Markdown-based notes with end-to-end encryption for sync, and no vendor lock-in on the sync layer itself. Point it at Nextcloud, Dropbox, WebDAV, or whatever you already use; Joplin encrypts before it leaves the device either way. The pick if you want E2EE notes without adopting a new sync provider just for them.

**Good:**
- End-to-end encryption applies regardless of which sync backend you pick
- Flexible sync: Nextcloud, Dropbox, WebDAV, S3, and more
- Open source, Markdown files, easy export
- Official paid Joplin Cloud sync option exists too, if you'd rather not run your own backend

**Mind the:**
- You're responsible for choosing and maintaining a sync backend
- UI is more utilitarian than Notesnook or Obsidian
- Encryption must be turned on: it isn't forced by default

free, open source · [joplinapp.org →](https://joplinapp.org)

##### Cryptee · *the notes-and-photos pick*

`e2ee` · `zero-knowledge` · `web-based` · `works offline` · `free tier`

End-to-end encrypted notes and photo storage in one place, zero-knowledge, web-based, with offline support as a PWA. Useful if you want one encrypted home for both written notes and a small personal photo library instead of running separate apps for each.

**Good:**
- E2EE, zero-knowledge for both notes and photos
- Offline-capable PWA: no native app install required
- One encrypted vault covers two different data types

**Mind the:**
- Only the frontend is open source; the backend is closed
- Smaller, less established than the dedicated notes or photo specialists
- Web-based-first: native mobile experience is thinner
- Not a full Google Photos replacement at scale; Ente Photos on the Cloud Storage page is the dedicated answer for large photo libraries

free tier · paid plans available · [crypt.ee →](https://crypt.ee)

#### Worth knowing

- **Run the two-layer stack.** Notesnook (or Standard Notes) for capture-anywhere encrypted notes; Obsidian (or Logseq) for the long-form vault. Each does its job better than either does both.
- **Keep the sync vendor count down.** A local-first vault synced via Filen or Syncthing means your notes ride infrastructure you've already vetted: no new company learns your thinking.
- **Notes apps quietly become password managers.** Every "temporary" credential pasted into a note is a vault entry that never got made. Sweep your notes once and move secrets to the actual vault.
- **Journals deserve your strongest protection.** If a note would hurt in a custody dispute, a border search, or a breach dump, it belongs in an E2EE app with a strong passcode, not in whatever syncs to the account you log into on work machines.

---

### File Sharing

> This is a different problem from cloud storage. Cloud sync is ongoing: files stay in step across devices indefinitely. File sharing is a one-off: send this one thing once, to one person, then it's gone. The tools below are built around that: no account, no lingering copy, no ongoing relationship with a provider.

**What matters here:**
- **no account required**: A one-off transfer that demands a signup is a contradiction. The best tools here ask for nothing before you send.
- **e2ee or local-network-only**: Either the transfer never leaves your network, or it's encrypted end-to-end so a relay server only ever sees ciphertext.
- **ephemeral by default**: Self-destructing links, time limits, or download-once behavior. A "share" that lives forever is a leak waiting to happen.

#### Recommendations

##### LocalSend · *the default pick*

`open source` · `peer-to-peer` · `no account` · `free`

AirDrop, but cross-platform and open source. Devices on the same network discover each other and transfer directly: no internet connection, no server, no third party involved at all. Windows, macOS, Linux, Android, and iOS all get proper native clients. If both devices are in the same room or on the same Wi-Fi, this is the obvious answer.

**Good:**
- Nothing ever touches a server: purely device-to-device
- Open source, audited-by-readability, no telemetry
- Genuinely cross-platform, including Linux and iOS
- No account, no signup, no limits

**Mind the:**
- Both devices need to share a network; doesn't help over the open internet
- No web fallback if one side can't install an app

free, open source · [localsend.org →](https://localsend.org)

##### OnionShare · *the anonymity pick*

`open source` · `onion-routed` · `no account` · `free`

Spins up a temporary Tor onion service right from your own machine and hands you the address to share. No third-party server ever holds the file: whoever you send the link to connects through Tor directly to your computer for as long as you keep it running. This is the tool journalists hand sources, and the one to reach for when the sender's identity matters as much as the file's contents.

**Good:**
- No hosting provider in the loop: it's your machine, via Tor
- Also does anonymous chat and a temporary website, not just file drops
- Open source, widely vetted by the security/journalism community

**Mind the:**
- Your machine must stay online for the duration of the transfer
- Tor adds real latency; not built for large files or speed
- Recipient needs Tor Browser to connect

free, open source · [onionshare.org →](https://onionshare.org)

##### Buzzheavier · *the quick-link pick*

`web-based` · `no account` · `free tier`

A simple, anonymous file host: drop a file, get a link, send it. No signup needed for basic use, which makes it the low-friction option when LocalSend's local-network requirement or OnionShare's Tor dependency don't fit, say, sending a file to someone over a chat app with no other channel available. It's a hosted, third-party service, so treat it as convenience rather than a privacy-first pick.

**Good:**
- Works from a browser, no install, no account
- Fast for the common case: one link, anyone can grab it

**Mind the:**
- A hosted third party handles the file in transit; not e2ee
- Less scrutinized than the other tools on this page; don't put anything sensitive through it

free (basic use) · [buzzheavier.com →](https://buzzheavier.com)

##### PrivateBin · *the text/snippet pick*

`open source` · `zero-knowledge` · `self-hostable` · `no account` · `free`

An encrypted pastebin, for text and code snippets rather than files. Content is encrypted client-side before it ever reaches the server, so the server stores ciphertext and never sees your paste. Open source and trivially self-hostable if you want your own instance instead of trusting a public one.

**Good:**
- True zero-knowledge: encryption happens in the browser
- Burn-after-reading and expiring pastes built in
- Self-host it in minutes if you don't want a public instance

**Mind the:**
- Text/snippets only; not a file transfer tool
- Public instances vary in trustworthiness; self-host if it matters

free, open source · [privatebin.info →](https://privatebin.info)

#### Worth knowing

- **This page is for one-off transfers, not ongoing sync.** If you need a folder to stay identical across devices over time, that's a different job: see Syncthing on the Cloud Storage page, which is the better tool for that and isn't duplicated here.

---

### Office Suites

> Google Docs and Microsoft 365 mean every document you write is readable by the platform and synced to their cloud by default. The alternatives below keep documents local-first or end-to-end encrypted: your drafts stay yours, whether that's a file on disk or ciphertext on someone else's server.

**What matters here:**
- **local-first vs cloud-required**: Does the suite work fully offline with files you own, or does it need an account and a server to function at all?
- **format compatibility**: Everyone else sends.docx and.xlsx. Fidelity on open/save round-trips (fonts, layout, formulas) is what makes a switch survivable.
- **encryption for cloud/collab**: If documents sync or multiple people edit live, is that traffic and storage end-to-end encrypted, or just HTTPS to a server that can read everything?

#### Recommendations

##### OnlyOffice · *the default pick*

`partially open source` · `self-hostable` · `desktop app` · `free tier`

The strongest Microsoft format fidelity of any non-Microsoft suite: documents round-trip through.docx/.xlsx/.pptx with fewer surprises than the alternatives. Open source at the core, usable as a standalone desktop app with no account at all, or self-hosted if you want real-time collaboration on infrastructure you control. The default starting point for most people leaving Microsoft or Google.

**Good:**
- Best-in-class compatibility with Office file formats
- Desktop app needs no account and no internet connection
- Self-hostable for E2EE-adjacent collaboration on your own server
- Open source core with an active project behind it

**Mind the:**
- The hosted/cloud version is a separate commercial product; read which one you're using
- Self-hosting real-time collaboration takes real setup effort
- Some enterprise-grade format edge cases still slip in complex files

desktop free · self-hosted free, cloud plans extra · [onlyoffice.com →](https://onlyoffice.com)

##### LibreOffice · *the classic pick*

`open source` · `local-first` · `no account` · `free`

The free, open-source desktop suite that's been the default Microsoft Office alternative for over a decade. Fully offline, no account, no cloud: write, save, done. Format support across.docx/.xlsx/.pptx is excellent and improves every release, backed by a large, active open-source community.

**Good:**
- Completely free, open source, no account required at any point
- Works fully offline by design; there's no cloud mode to opt out of
- Mature, actively developed, huge install base means bugs get found fast

**Mind the:**
- No built-in real-time multi-user collaboration
- Complex Office macros and embedded objects can still misbehave on open
- UI feels dated next to Google Docs or Microsoft 365

free, open source · [libreoffice.org →](https://libreoffice.org)

##### OpenOffice · *the legacy pick*

`open source` · `local-first` · `free`

The project LibreOffice forked from in 2010. LibreOffice is the actively maintained continuation: it inherited the codebase and kept moving, while OpenOffice's development pace has slowed considerably under the Apache Software Foundation. It still works, and some people stick with it out of familiarity, but there isn't a compelling reason to start here today.

**Good:**
- Free, open source, no account: same baseline as LibreOffice
- Familiar interface for anyone who used it pre-fork

**Mind the:**
- Development has slowed considerably since the LibreOffice fork
- Fewer format-compatibility and security fixes land here, and slower
- For most people, LibreOffice is simply the better version of this

free, open source · [openoffice.org →](https://openoffice.org)

##### CryptPad · *the encrypted-collab pick*

`e2ee` · `zero-knowledge` · `real-time collaboration` · `open source` · `free tier`

Real-time collaborative documents, spreadsheets, presentations, and more, in the browser, like Google Docs, except the server can't read any of it. End-to-end encrypted and zero-knowledge by design, open source, and the closest thing going to "Google Docs but the server can't read it." The pick when live multi-person editing matters and encryption isn't optional.

**Good:**
- Genuine real-time collaboration, fully end-to-end encrypted
- Zero-knowledge server: operators can't read your documents
- Open source, self-hostable if you want full control

**Mind the:**
- Office format import/export is functional but not as faithful as OnlyOffice/LibreOffice
- Free tier has storage and feature limits
- Browser-based: no offline-first desktop app

free tier · paid plans for more storage · [cryptpad.org →](https://cryptpad.org)

##### Fileverse · *the one to watch*

`decentralized` · `e2ee` · `free`

A newer, decentralized/web3-adjacent take on collaborative documents, emphasizing user-owned data and end-to-end encryption rather than a company holding the master copy. The ideas are right, but it's meaningfully less established than everything else on this page: smaller team, shorter track record, less battle-testing. Worth watching, not yet a default recommendation for documents that matter.

**Good:**
- End-to-end encrypted with a genuine user-ownership model
- Decentralized architecture avoids a single corporate custodian
- Free to use, actively iterating
- Shipped a second product (dSheets) alongside dDocs, expanding beyond a single tool

**Mind the:**
- Early-stage project: far less track record than CryptPad or the desktop suites
- Format compatibility and feature depth are still catching up
- Web3/decentralized tooling adds unfamiliar failure modes for non-technical users

free · [fileverse.io →](https://fileverse.io)

#### Worth knowing

- **Test with your actual files before fully switching.** OnlyOffice and LibreOffice both handle everyday.docx/.xlsx well, but complex macros, embedded objects, and unusual formatting can still misbehave across any non-Microsoft suite. Open your real documents (the ones with tables, tracked changes, and that one macro someone wrote in 2014) before committing.

---

### Encryption

> Full-disk and container encryption means a lost or stolen device is a hardware loss, not a data breach. This page covers encrypting drives and files at rest, not cloud-sync encryption, which lives on the Cloud Storage page.

**before you pick:** Encryption is only as strong as the passphrase protecting it, and it only protects data at rest: a powered-on, unlocked machine is readable by anyone with access to it. Pick a tool you'll actually keep enabled; an encrypted drive you disable after one annoying prompt protects nothing.

**What matters here:**
- **open source / auditability**: Encryption you can't inspect is encryption you're trusting blind. Open code and independent audits are how "secure" gets verified instead of asserted.
- **cross-platform support**: Drives and containers get plugged into other machines. A format locked to one OS is a format you'll fight with eventually.
- **plausible deniability / hidden volumes**: Not every threat model needs it, but where coercion is plausible, the ability to reveal a decoy volume (not just refuse a password) matters.

#### Recommendations

##### VeraCrypt · *the default pick*

`open source` · `audited` · `desktop app` · `hidden volumes` · `free`

The successor to TrueCrypt and the obvious default: open source, independently audited, and available on Windows, macOS, and Linux with the same container and full-disk encryption options on each. Supports hidden volumes: a decoy password reveals an innocuous volume while the real data sits in a separate, deniable container. Mature, well-documented, and actively maintained since it picked up where TrueCrypt's abrupt 2014 shutdown left off.

**Good:**
- Open source with a completed independent security audit
- Full-disk, partition, and container encryption on every major OS
- Hidden volumes for genuine plausible deniability
- No subscription, no account, no telemetry

**Mind the:**
- Interface is dated and unforgiving of mistakes: read before you click
- No mobile apps; reading a VeraCrypt volume on a phone is awkward at best
- Boot-time full-disk encryption setup is unforgiving if interrupted

free, open source · [veracrypt.fr →](https://veracrypt.fr)

##### LUKS · *the linux-native pick*

`linux only` · `open source` · `free`

Linux's native disk-encryption standard, built into the kernel's dm-crypt subsystem and offered by nearly every distro installer as a checkbox during setup. There's no separate app to install or trust: it's the encryption you already get by ticking "encrypt my drive" when you install Ubuntu, Fedora, or most anything else. Open source, widely deployed, and battle-tested across the entire Linux ecosystem.

**Good:**
- Built into the kernel: no third-party trust required
- One checkbox at install time on most distros
- Open source and extremely widely deployed
- Supports multiple key slots: several passphrases for one volume

**Mind the:**
- Linux-only: no native Windows or macOS support
- No plausible-deniability story; a LUKS header is identifiable as such
- TPM-bound auto-unlock (e.g. Clevis) can be defeated via physical TPM-bus sniffing on some hardware; a plain passphrase unlock isn't affected
- Recovery requires care: losing the header or all key slots means the data is gone

free, built in · [cryptsetup →](https://gitlab.com/cryptsetup/cryptsetup)

##### BitLocker · *the windows pick, with caveats*

`windows only` · `closed source` · `paid`

The built-in option on Windows, and a real improvement over an unencrypted drive, but it comes with caveats worth stating plainly. It's closed source, so its internals can't be independently verified the way VeraCrypt's can, and the whole thing is controlled by Microsoft end to end. The bigger catch: on Home edition, what you typically get is "device encryption," which by default escrows your recovery key to your Microsoft account, meaning Microsoft (and anyone who compels or breaches Microsoft) holds a copy of the key. Full BitLocker with local-only key control needs Pro or Enterprise.

**Good:**
- Already on the machine: zero install, zero cost on Pro/Enterprise
- Tight OS integration; TPM-backed unlock with no daily friction
- Manageable at scale via Active Directory/Intune for organizations

**Mind the:**
- Closed source: no independent way to verify the implementation
- Home edition's device encryption escrows your key to a Microsoft account by default
- Full control over key storage requires Pro/Enterprise, not Home
- No plausible deniability and no cross-platform volumes

free with Windows Pro/Enterprise · [microsoft support →](https://support.microsoft.com/windows/turn-on-device-encryption)

#### Worth knowing

- **This page is about local, at-rest encryption.** Encrypting a drive or container that lives on your own hardware. For encrypting files you keep in a third-party cloud (Dropbox, Google Drive, and similar) see Cloud Storage & Sync, where a client-side encryption layer like Cryptomator belongs and is covered in full.
- **Encryption only protects a powered-off or locked device.** Once a drive is unlocked and the machine is running, the data is as exposed as it would be unencrypted. Pair full-disk encryption with a screen lock and a short auto-lock timeout.
- **Write down your recovery key somewhere durable.** A forgotten passphrase with no recovery key is functionally the same as a drive failure: the data is gone. Store it offline, away from the device it unlocks.
- **Hidden volumes only work if you never mount the hidden one carelessly.** Filesystem timestamps and OS-level traces can undermine deniability if the hidden volume is opened on a system that logs activity. If this matters to your threat model, it matters enough to read VeraCrypt's documentation on it in full.

---

## Platforms

### Mobile OS

> Your phone is the most personal computer you own and the most chatty: location, contacts, sensors, all reporting home by default. There are two sane answers: an iPhone configured deliberately, or a de-Googled Android. Which one is right is a pure threat-model question.

**before you pick:** Be honest about what you'll live with. iOS asks nothing of you and covers the vast majority of threat models out of the box. Flashing a custom Android OS is a weekend project with real stakes: banking apps may object, there's no support line, and the friction is daily. The technically superior option you abandon in month two protects less than the good-enough one you keep.

**What matters here:**
- **update speed**: Security patches matter more than any privacy feature. Days-behind-upstream is the standard to hold; Apple and GrapheneOS both meet it.
- **hardware security**: Secure Enclave, Titan chips, verified boot: cryptographic key isolation and tamper-proof boot are hardware properties, not settings.
- **ecosystem exposure**: Who the OS reports to by default, and whether you can turn it off. None at all, sandboxed and optional, or "trust Apple entirely" are all different answers.
- **app compatibility**: The friction people underestimate until they live with it daily. Banking apps, tap-to-pay, and that one work app decide more setups than security specs do.

#### Recommendations

##### iOS · *the default pick*

`🍎 apple only` · `closed source` · `free`

One of the strongest out-of-the-box privacy and security postures available without meaningful setup overhead. The Secure Enclave isolates cryptographic material at the hardware level, the app sandbox and permission model are among the most strictly enforced in consumer mobile, and Apple Pay tokenizes payments, meaningfully better than handing out card numbers. Appropriate for the vast majority of users, including those with real operational security needs, where app compatibility and reliability matter.

**Good:**
- Hardware-level key isolation (Secure Enclave) on every device
- Strictly enforced sandbox and permission prompts
- Apple Pay tokenization beats standard card transactions
- Fast, long-lived updates with zero effort from you

**Mind the:**
- Closed source; the trust model is "Apple, entirely": a FAANG dependency
- No user-controlled OS attestation
- iCloud backups (including iMessages) are not E2EE until you explicitly enable Advanced Data Protection: do it day one

os free · hardware from ~€500 · [apple.com/privacy →](https://www.apple.com/privacy/)

##### GrapheneOS · *the maximum-security pick*

`open source` · `verified boot` · `sandboxed play` · `free`

If your threat model extends to nation-state adversaries, device seizure, or verified OS attestation requirements, this is the technically superior choice: hardened memory allocator, stricter sandboxing, security patches in days, and Google Play (if you want it) running as an ordinary sandboxed app with no special privileges. It comes with real usability trade-offs and app-compatibility friction that most people underestimate until they're living with it daily. For those who understand and accept that, nothing else comes close.

**Good:**
- Maximum verifiable security and privacy in consumer mobile
- Sandboxed Google Play: compatibility without the privileges
- Verified boot, user-controlled attestation, full OTA updates
- Per-app network/sensor kill switches, storage scopes, duress PIN

**Mind the:**
- Pixel hardware only today (buying a Google phone to escape Google, yes, the irony is noted); a Motorola partnership for non-Pixel devices was announced for 2027, none shipped yet
- Some banking apps refuse non-stock OSes; no Google Pay tap-to-pay, period
- The friction is daily, not just at setup; be honest about your tolerance

free · pixel from ~€350 used/refurb · [grapheneos.org →](https://grapheneos.org)

##### CalyxOS · *the middle-ground pick*

`open source` · `nonprofit` · `free`

De-Googled Android with a gentler philosophy: privacy-respecting defaults that work out of the box, when a current build is available. CalyxOS was listed officially "Unsupported" from August 2025 after Google cut back Pixel-specific AOSP source and CalyxOS had to rebuild its release-signing infrastructure; it's been gradually resuming through 2026 but as of writing isn't back to a stable, fully-supported release. microG (an open reimplementation of Google's service APIs) ships preinstalled-but-optional, so push notifications and location work the way most apps expect without talking to Google directly. Less hardened than GrapheneOS, friendlier on day one when it's in a supported state: the halfway house between stock Android and the deep end.

**Good:**
- microG covers most app expectations with far less Google exposure
- Supports Fairphone: repairable hardware, not just Pixels
- Thoughtful defaults: Datura firewall per app, Tor integration

**Mind the:**
- Not currently back to a stable, fully-supported release after a 2025-2026 upstream disruption; check current status before relying on it as a daily driver
- CalyxVPN is temporarily excluded from current builds
- microG is a compatibility shim, not a security boundary: weaker isolation than sandboxed Play
- Patches arrive on a monthly cadence, slower than GrapheneOS or Apple
- Smaller team; fewer devices than Lineage

free · [calyxos.org →](https://calyxos.org)

##### LineageOS · *the old-hardware pick*

`open source` · `free`

The community ROM that keeps abandoned phones alive: a seven-year-old device running current Android with no Google apps installed is a genuinely private machine and a landfill rescue at once. The honesty clause: most builds relax verified boot and ship patches slower, so treat it as the sustainability pick, not the security pick.

**Good:**
- Enormous device support, your drawer phone probably qualifies
- Ships Google-free by default; you choose what to add
- Two decades of community lineage (CyanogenMod heritage)

**Mind the:**
- Verified boot usually lost; bootloader stays unlocked on most devices
- Patch speed varies per device maintainer
- Quality differs wildly across the device list, research yours first

free · [lineageos.org →](https://lineageos.org)

#### Worth knowing

- **On iOS, the checklist is short but real.** Enable Advanced Data Protection (Settings → iCloud → Advanced Data Protection) so backups are actually E2EE, audit app permissions quarterly, and turn off the advertising identifier (Settings → Privacy → Apple Advertising). That's most of the gap closed.
- **On de-Googled Android, get apps from open stores first.** F-Droid (or the nicer Droid-ify client) for open-source apps, Aurora Store for anonymous Play access. On GrapheneOS, sandboxed Play is the cleanest route for the stubborn few.
- **The OS doesn't fix the apps.** Instagram on GrapheneOS still tells Meta everything you do in Instagram, and the same goes for iOS. Pair the OS choice with an app diet and the DNS filtering from the network page.
- **Mind the SIM.** Your carrier logs tower locations regardless of OS. For most people that's accepted; for high-risk models it's the reason burner SIMs and Wi-Fi-only devices exist.

---

### Desktop OS

> Windows 11 ships with telemetry, an advertising ID, and a cloud account it really, really wants you to use. Linux removes the surveillance question entirely, and in 2026, "the easy distro" and "the private distro" are the same thing for most people.

**before you switch:** Check your non-negotiables first: specific Windows-only software (Adobe suite, some games with kernel anticheat, niche work tools) is the real switching cost, not difficulty. Try a live USB for an afternoon before touching your disk, and dual-boot before going all-in.

**What matters here:**
- **update model**: Fast, boring security updates with an undo button. Atomic/immutable distros make a bad update a reboot instead of an evening.
- **hardware support**: Wi-Fi, GPU, sleep, fingerprint reader. Newer kernels mean newer laptops work; check your model before installing, not after.
- **sane security defaults**: Full-disk encryption offered in the installer, SELinux/AppArmor on, firewall enabled. Defaults matter because nobody revisits them.
- **maintenance honesty**: Some systems maintain themselves; some are a hobby. Both are fine: pick the one that matches the time you'll actually give it.

#### Recommendations

##### Fedora Workstation · *the default pick*

`open source` · `free`

Modern, polished, and secure-by-default: SELinux enforcing, Wayland, disk encryption one checkbox away, and fresh-but-tested packages on a six-month rhythm. This is the "just give me the answer" pick, and the base for this site's setups. The Atomic variants (Silverblue) add image-based updates with rollback if you like your OS unbreakable.

**Good:**
- Security defaults done for you: SELinux, firewalld, FDE in installer
- Current kernels mean good new-hardware support
- No telemetry beyond an opt-in counting ping
- Backed by a huge community; problems are googleable

**Mind the:**
- Media codecs and NVIDIA drivers need the RPM Fusion repo (10 minutes, once)
- Six-month upgrades are mostly painless, but they exist
- GNOME's workflow is opinionated: KDE spin if you disagree

free · [fedoraproject.org →](https://fedoraproject.org)

##### Secureblue · *the hardened-atomic pick*

`immutable` · `open source` · `free`

Same atomic, image-based lineage as Fedora's Silverblue variants, but built specifically with hardening defaults beyond stock Fedora: stricter application sandboxing, hardened kernel options, and a security-first set of defaults rather than Fedora's general-purpose ones. For people who want Fedora's update model with a meaningfully tighter security posture out of the box.

**Good:**
- Hardened kernel options and stricter sandboxing as defaults, not opt-in
- Immutable/atomic base: a bad update is a reboot, not a rebuild
- Inherits Fedora Atomic's tooling and package ecosystem

**Mind the:**
- Smaller project and community than mainline Fedora
- Stricter sandboxing occasionally means more friction with software that assumes a looser default
- Less battle-tested at scale than stock Fedora or the bigger distros here

free · [secureblue.dev →](https://secureblue.dev)

##### Tails · *the amnesic pick*

`amnesic` · `onion-routed` · `free`

Not a daily OS, a tool. Tails boots from a USB stick, routes all traffic through Tor, and forgets everything at shutdown unless you explicitly persist it. For journalists, sources, abuse survivors, or anyone who needs a session that provably never existed on the machine. Keep one on a stick in a drawer; it costs nothing.

**Good:**
- Amnesia by default: the threat model is "this computer is hostile"
- Tor-only networking, no leaks by construction
- Runs on borrowed hardware without touching its disk
- Encrypted persistent storage is optional and explicit

**Mind the:**
- Tor speeds: browsing is noticeably slower, big downloads painful
- Not for daily use; no apps you install survive (outside persistence)
- Using Tails can itself be notable to a network observer

free · any 8GB+ usb stick · [tails.net →](https://tails.net)

##### Qubes OS · *the compartmentalized pick*

`compartmentalized` · `open source` · `free`

Every task runs in its own disposable virtual machine: browsing, email, work documents, and anything sketchy each get a separate, isolated "qube" built on the Xen hypervisor. This is the OS power users in a hardened setup actually use: a compromise in one qube doesn't touch the others, by architecture rather than by hope. Demanding on hardware and patience; remarkable at its job.

**Good:**
- Compartmentalization is architectural: a compromised qube stays contained
- Disposable VMs for anything risky, gone on close
- Trusted by security researchers and the hardened-threat-model crowd

**Mind the:**
- Heavy hardware requirements: plenty of RAM and a Xen-compatible CPU
- Steep learning curve; managing qubes is a daily habit, not a one-time setup
- Overkill for most threat models: this is the deep end, not the default

free · [qubes-os.org →](https://qubes-os.org)

##### Arch Linux · *the diy pick*

`open source` · `free`

Nothing installed you didn't choose, packages hours behind upstream, and the ArchWiki, the documentation every other distro's users end up reading anyway. Privacy-wise it's whatever you build, which is the point: minimal by construction means minimal attack and telemetry surface. Budget a free weekend for the install and call it tuition.

**Good:**
- You understand your system because you assembled it
- Rolling release: no version upgrades, ever
- AUR has effectively every piece of Linux software
- The wiki teaches you Linux, not just Arch

**Mind the:**
- Security defaults (firewall, MAC, encryption) are yours to set up: forgetting them is worse than a managed distro
- Rolling means occasional manual-intervention updates; read the news feed
- Not the pick if tinkering isn't fun for you, and that's fine

free · [archlinux.org →](https://archlinux.org)

##### NixOS · *the declarative pick*

`open source` · `free`

Your entire system (packages, services, settings) lives in one config file you can read, version, and replay. Every change is atomic; every previous generation is a boot-menu entry. For privacy auditing it's quietly brilliant: the system is exactly what the file says, nothing more. The learning curve is real and the error messages are famous.

**Good:**
- Reproducible: your exact system from one file, on any machine
- Rollbacks built into the boot menu: updates are fearless
- Config-as-code doubles as documentation of every choice you made
- Enormous package set (nixpkgs is the largest repo going)

**Mind the:**
- The Nix language is its own learning project
- Out-of-tree software can be awkward (FHS expectations don't hold)
- Documentation lags the (fast) pace of the ecosystem

free · [nixos.org →](https://nixos.org)

#### Worth knowing

- **Turn on disk encryption at install time.** It's a checkbox during installation and a project afterwards. A lost laptop without FDE is a data breach; with it, it's a hardware loss.
- **Staying on Windows? Harden it.** Local account instead of Microsoft account, O&O ShutUp10++ for telemetry, BitLocker on. It won't match Linux's baseline, but it beats doing nothing while you plan the move.
- **macOS sits in between.** Excellent device security, moderate telemetry, one vendor's cloud pulling hard. FileVault on, analytics off, iCloud minimal gets you a long way without changing platforms.
- **Want the deep end?** See the Qubes OS entry above.
- **Fedora isn't the only "it just works" option.** Pop!_OS, Zorin OS, and Linux Mint are solid beginner-friendly alternatives in the same spirit, all polished, all considerably more Windows-like out of the box for newcomers who want a familiar layout on day one. Not full recommendations here, but worth a look if Fedora's GNOME-first workflow doesn't click for you.

---

## Money & Connectivity

### Financial Services

> Every merchant you pay gets your real card number, and every breach of theirs hands that number, often tied to your real name and bank, to whoever broke in. Virtual cards and identity-shielded financial tools put a disposable layer between your money and the growing list of companies that ask for it.

**What matters here:**
- **merchant-locked numbers**: A unique card number per merchant means one breach exposes one number, not your entire payment history across every site you've used it on.
- **spend limits & auto-expire**: Cap a card at the subscription price, set it to single-use, or kill it the moment a free trial should have ended, before the gym membership does it for you.
- **identity requirement**: Some tools need just an email and a funding source; others want an SSN. The less deep-identity verification required, the less there is to leak.

#### Recommendations

##### Privacy.com · *the virtual card pick*

`us only` · `virtual cards` · `free tier`

Generate a new virtual debit card number for every merchant, cap each one at a set amount, pause or close it in one tap. A breach at one subscription service never touches the others: they each got a different number. The free tier covers most people; paid tiers add more cards per month and cashback.

**Good:**
- Merchant-locked numbers contain breach damage to one card
- Spend limits and auto-expire kill forgotten subscriptions
- Close a card instantly without touching your real bank account
- Free tier is genuinely usable, not a crippled trial

**Mind the:**
- US-only: no service for most of the rest of the world
- Still requires linking a real bank account or debit card to fund it
- Cards-only: no phone numbers, email aliases, or broader identity cover

free tier · paid tiers add more cards & cashback · [privacy.com →](https://privacy.com)

##### MySudo · *the identity-compartmentalization pick*

`virtual cards` · `aliasing` · `paid`

Goes wider than cards: MySudo bundles virtual card numbers with disposable phone numbers and email aliases into separate "personas": one for online shopping, one for classifieds, one for that one form you had to fill out once. The financial piece is a feature of a broader identity-compartmentalization tool, not the whole product.

**Good:**
- One persona bundles a card, phone number, and email together
- Compartmentalizes identity across contexts, not just payments
- Useful for classifieds, dating apps, and one-off forms beyond shopping

**Mind the:**
- Subscription cost: no meaningful free tier for ongoing use
- More moving parts than a cards-only tool; more to configure up front
- Card network and regional support is narrower than a dedicated card service

subscription · tiered by persona count · [mysudo.com →](https://mysudo.com)

#### Worth knowing

- **These complement, not replace, the rest of your stack.** A virtual card stops a merchant breach from exposing your real number; it does nothing if your password is reused or your account has no second factor. Pair this with a password manager and 2FA, and use an alias service for the email and phone-number side of the same problem.

---

### Cellular Services

> Your carrier knows your location at all times, that's how cell networks work, and most require real-identity KYC just to activate a SIM. These are privacy-focused alternatives, ranging from anonymous eSIMs you pay for in crypto to MVNOs that simply collect less and sell less of what they collect.

**What matters here:**
- **identity at signup**: Real name, ID scan, and SSN at one end; an email address and a card (or crypto) at the other. This is the single biggest differentiator here.
- **data retention & logging**: What's kept, for how long, and who it's shared with: data brokers, ad networks, or just what regulation requires.
- **coverage trade-off**: Smaller, privacy-focused providers often ride on a major network's towers but with less retail presence and support; know what you're giving up.

#### Recommendations

##### Cape · *the privacy-MVNO pick*

`us only` · `mvno` · `minimal data collection` · `paid`

A US-based mobile carrier built around the explicit promise of minimal data collection and no third-party data broker relationships, the things a typical carrier sells off as a side business. Functions like a normal phone plan; the difference is what happens to your data behind the scenes.

**Good:**
- Privacy-by-design as the core pitch, not an add-on
- No data broker relationships selling your usage and location data
- Normal phone-plan experience: a full SIM, not just data
- Daily IMSI/identifier rotation, plus two free secondary numbers
- Public partnerships with EFF and GrapheneOS

**Mind the:**
- US-only coverage
- Newer company, shorter track record than legacy carriers
- Still requires some signup information to activate service and bill you

paid · plan-based pricing · [cape.co →](https://cape.co)

##### Phreeli · *the anonymity-leaning pick*

`mvno` · `minimal data collection` · `paid`

A privacy-positioned mobile virtual network operator that leans toward minimal data collection and reduced signup friction. Founded by Nicholas Merrill, who spent over a decade fighting an FBI National Security Letter and also founded the Calyx Institute, a stronger privacy pedigree than a quick "smaller player" glance suggests. A smaller, newer player than the major carriers, worth comparing directly against Cape for current coverage and pricing before committing.

**Good:**
- Privacy-leaning positioning similar to Cape
- MVNO model: full phone service, not just data
- Founded by Nicholas Merrill, longtime FBI National Security Letter challenger and Calyx Institute founder

**Mind the:**
- Its "Double-Blind Armadillo" privacy claim is, by Phreeli's own whitepaper, a simplified version of the protocol it's named after
- Smaller and less independently verified than the bigger names here
- Coverage and exact data practices should be checked directly before signing up

paid · plan-based pricing · [phreeli.com →](https://phreeli.com)

##### Silent Link · *the anonymous esim pick*

`esim only` · `anonymous signup` · `crypto accepted` · `paid`

An eSIM you can buy with cryptocurrency and activate with no identity verification at all. Not a phone plan replacement: there's no physical SIM, no retail presence, no contract, but excellent for travel data or a burner number that was never tied to your name in the first place.

**Good:**
- No identity verification required to purchase or activate
- Cryptocurrency payment accepted, breaking the payment-to-identity link too
- Good fit for travel data and short-term, burner-style use

**Mind the:**
- eSIM-only: needs compatible hardware, no physical SIM option
- Not designed as a primary, everyday phone line
- Data-focused; voice/SMS support varies by plan

paid · prepaid data plans · [silent.link →](https://silent.link)

##### Saily · *the travel-convenience pick*

`esim only` · `paid`

An eSIM travel data app from the Nord Security family (the company behind NordVPN). Convenience-focused: buy a data plan for the country you're visiting in an app, install the eSIM, done. Privacy posture is reasonable for what it is, but it's built for traveler convenience first, anonymity second.

**Good:**
- Fast, app-based setup for travel data in dozens of countries
- Backed by an established, well-resourced company
- No physical SIM swapping while traveling

**Mind the:**
- Requires an account and payment details, not anonymous like Silent Link
- Data-only plans in most regions, not full voice/SMS service
- Positioned for convenience, not as a hardened anonymity tool

paid · per-country data plans · [saily.com →](https://saily.com)

#### Worth knowing

- **The network always knows which tower you're near.** This is physics, not policy: every cellular connection requires the network to locate your device well enough to route calls and data to it. No provider on this page changes that. What they change is whether your signup identity gets linked to that location history and whether it's sold to data brokers afterward. These tools reduce data-broker exposure and signup-identity linkage; they don't make you invisible to the network operator.

---

## Other

### AI Tools

> Mainstream AI chatbots typically log and train on your conversations by default: your questions, your half-finished drafts, your 2am medical worries, all retained somewhere. These are options that minimize logging, run locally, or are built by privacy-first companies.

**What matters here:**
- **retention & training policy**: Does the provider keep your conversations, and do they get used to train future models? Read the actual policy, not the marketing page.
- **local vs cloud execution**: Cloud-hosted means your prompts leave your device no matter what the policy says. Local means they never do.
- **company track record**: A privacy policy is only as good as the company's history of honoring it. Track record matters as much as the document.

#### Recommendations

##### Duck.ai · *the no-account pick*

`cloud` · `no account` · `free`

DuckDuckGo's AI chat product sits in front of several underlying model providers and explicitly strips identifying metadata before requests reach them, so the model provider answers the question without learning who asked it. No account required, no cost.

**Good:**
- No account or sign-in needed to use it at all
- Strips metadata before forwarding to underlying model providers
- Free, with access to multiple model options

**Mind the:**
- Still a cloud service: your prompt content does leave your device
- Relies on DuckDuckGo's middleman role being implemented as described
- No persistent history by design, which also means no continuity across sessions

free · [duck.ai →](https://duck.ai)

##### Le Chat · *the eu-jurisdiction pick*

`cloud` · `🇫🇷 france` · `free tier`

Built by Mistral AI, based in France and operating under GDPR jurisdiction, a meaningfully different legal environment than US-based providers. Model quality is competitive with the mainstream options, with a generally privacy-conscious positioning from the company behind it.

**Good:**
- GDPR jurisdiction gives users enforceable data rights
- Competitive model quality against mainstream closed alternatives
- Privacy-conscious company positioning, not just policy text

**Mind the:**
- Still a cloud service with the usual account/login data trail
- Jurisdiction helps with legal recourse, not with the trust question itself

free tier · paid tiers for higher usage · [chat.mistral.ai →](https://chat.mistral.ai)

##### Lumo · *the proton-ecosystem pick*

`cloud` · `zero-knowledge` · `free tier`

Proton's AI assistant, part of the same ecosystem as Proton Mail and Proton VPN. Stored chat history uses zero-access encryption, so Proton can't read what's saved, though like any chatbot, prompts are processed in plaintext to generate a response. Proton states it doesn't train models on user conversations, consistent with the privacy-first positioning of the rest of Proton's product line.

**Good:**
- Zero-access encryption for stored chat history, not just encryption at rest
- No training on user conversations, by policy
- Backed by Proton's broader privacy-first track record

**Mind the:**
- Best integrated if you're already using other Proton products
- Model quality and feature breadth still trail the largest frontier labs

free tier · paid with Proton plans, or standalone Lumo Plus ~$13/mo · [proton.me/lumo →](https://proton.me/lumo)

##### Venice AI · *the no-logging pick*

`cloud` · `no logs` · `crypto accepted` · `free tier`

Privacy-first positioned around a no-logging claim, with a censorship-resistant angle: access to less-restricted model outputs than mainstream providers typically allow. Crypto payment is supported, keeping the payment trail off the usual financial rails.

**Good:**
- No-logging as the core privacy claim
- Crypto-payment friendly, avoiding a card-to-identity link
- Less restrictive model access than many mainstream chat products

**Mind the:**
- "No logging" is a policy claim, not something independently audited here
- Uncensored-model angle means less guardrail moderation: know what you're opting into
- Smaller, newer company than the legacy AI labs

free tier · paid for higher usage · [venice.ai →](https://venice.ai)

##### Ollama · *the local pick*

`local-first` · `works offline` · `no account` · `free`

Ollama runs open-weight LLMs entirely on your own hardware: nothing ever leaves your machine, which makes it the maximalist privacy option on this page, since there's no provider to trust because there's no provider in the loop. That privacy story is specifically about local models. Ollama also now ships Ollama Cloud, an optional paid tier that runs larger models on Ollama's own servers through the same CLI, which doesn't carry the same no-provider guarantee. The trade-off on local models is still real: you need decent hardware (a capable GPU helps a lot), and locally-runnable open-weight models are generally weaker than top closed frontier models.

**Good:**
- Nothing leaves your device on local models: no third party to trust at all
- No account, no subscription, no logging by definition for local use
- Works offline once models are downloaded

**Mind the:**
- Needs decent hardware: a weak laptop will run small models slowly
- Open-weight models generally lag top closed frontier models in capability
- Optional Ollama Cloud tier sends prompts to Ollama's servers; the local privacy story doesn't apply there
- You're responsible for keeping models and the runtime updated

free · hardware is the real cost · [ollama.com →](https://ollama.com)

#### Worth knowing

- **"Doesn't train on your data" is a policy promise, not a cryptographic guarantee** the way end-to-end encryption is elsewhere on this site. A provider can change its policy, get acquired, or simply not be telling the truth; there's no way to verify it the way you can verify a zero-knowledge encryption claim. Calibrate trust accordingly, and weigh company track record alongside the policy text itself. Ollama is the only option here that removes the trust question entirely: by removing the third party, there's no policy to trust or distrust in the first place.

---

### Maps

> Google Maps logs everywhere you go by default: Timeline and Location History exist specifically to remember your movements. These alternatives range from "good enough privacy with full features" to "fully offline, no account, ever."

**What matters here:**
- **account requirement**: Does navigation actually require signing in, or is an account only needed for extras like saved places sync?
- **offline availability**: Downloaded maps that work with no signal at all, useful for privacy and for the dead zones a phone-only map can't fix.
- **open vs proprietary data**: OpenStreetMap-based tools run on community-maintained, auditable map data; proprietary maps are a black box you can't inspect.

#### Recommendations

##### Apple Maps · *the ecosystem pick*

`🍎 apple only` · `closed source` · `free`

A solid default for iPhone users, and Apple's privacy stance here is genuinely stronger than Google's: route and traffic data processing happens on-device where possible, and randomized identifiers are used rather than a persistent account-linked history. Still Apple-ecosystem-only, and the map data itself is closed.

**Good:**
- On-device processing for much of routing and traffic data
- Randomized identifiers instead of persistent account tracking for traffic reporting
- No separate app needed for iPhone users; already the default

**Mind the:**
- iOS/macOS only; no meaningful option for other platforms
- Closed, proprietary map data: nothing to audit independently
- Signed-in Apple ID users still get some personalization tied to their account

free · [maps.apple.com →](https://maps.apple.com)

##### CoMaps · *the open-source pick*

`open source` · `openstreetmap` · `no account` · `works offline` · `free`

Built on OpenStreetMap data, with no account and no tracking by design. Part of the community-maintained fork lineage descending from Maps.me and Organic Maps: open development, transparent data sourcing, and offline maps as a first-class feature rather than an add-on. CoMaps itself forked from Organic Maps in May 2025 over governance concerns about Organic Maps' for-profit Estonian parent company.

**Good:**
- No account required for any feature
- Fully open source, auditable codebase and map data
- Strong offline map support out of the box

**Mind the:**
- OpenStreetMap data can lag commercial maps on business listings
- No real-time traffic data the way Google or Apple provide
- Smaller community-maintained project than the big commercial maps

free · [comaps.app →](https://comaps.app)

##### OsmAnd · *the configurable pick*

`open source` · `openstreetmap` · `works offline` · `no account` · `free tier`

Also OpenStreetMap-based, with robust offline maps and navigation and a deep settings menu that lets you configure almost everything about how the map looks and behaves. No account required. The trade-off for all that configurability is a steeper learning curve than a polished commercial app.

**Good:**
- Highly configurable: map layers, routing profiles, units, all adjustable
- Strong offline navigation, not just offline viewing
- No account required

**Mind the:**
- Interface is denser and less polished than mainstream map apps
- Same OpenStreetMap data trade-offs as CoMaps on listings/traffic
- Some advanced features sit behind a one-time paid unlock on certain platforms

free · some platforms have a paid unlock for extras · [osmand.net →](https://osmand.net)

##### Magic Earth · *the offline-navigation pick*

`closed source` · `no account` · `free tier`

Proprietary but privacy-positioned: core map browsing, search, and turn-by-turn navigation are free with no account required. Offline maps, traffic-aware navigation, and activity recording now sit behind a paid Premium subscription. A reasonable middle ground for people who want navigation with a privacy-conscious vendor but aren't committed to the OpenStreetMap-only ecosystem.

**Good:**
- Core navigation works free and without an account
- Privacy-conscious positioning from the vendor
- Turn-by-turn navigation quality closer to commercial apps

**Mind the:**
- Offline maps, live traffic, and trip recording now need paid Premium
- Closed-source: map data and app internals aren't independently auditable
- Smaller company and community than the open-source options

free core · premium for offline/traffic/recording · [magicearth.com →](https://magicearth.com)

##### Kagi Maps · *the early-stage pick*

`free`

From the team behind the Kagi search engine, Kagi Maps brings the same privacy-focused approach to mapping. Worth being honest about where it stands: it's a newer, smaller product than everything else on this page, with less track record and a narrower feature set so far.

**Good:**
- Privacy-focused approach consistent with Kagi's broader product line
- Backed by a company with an existing track record on privacy in search

**Mind the:**
- Earlier-stage product than the rest of this list: fewer features, less maturity
- Smaller user base means less real-world battle-testing so far
- Best evaluated directly before relying on it as a primary navigation tool

free · check current terms · [kagi.com/maps →](https://kagi.com/maps)

#### Worth knowing

- **OpenStreetMap-based options sometimes lag commercial maps on business listings and real-time traffic.** A restaurant that closed last month might still show up; rush-hour rerouting won't be as sharp as Google's. That's the trade-off for a map with no tracking and no central company deciding what you see: for most navigation needs it's a fair trade, but know it going in.

---

### Resources

> Not every useful thing is an "install this tool" recommendation. External sites worth bookmarking: breach checkers, terms-of-service reviewers, and free utility collections that don't fit the format of the rest of this site, but earn a place in the bookmarks bar anyway.

**independent third parties:** These are sites run by other people and organizations, not by this project. Judge them on their own track record: link rot, ownership changes, and shifting business models happen to bookmarked sites just like anywhere else.

#### Breach & exposure checking

- **[DataBreach.com](https://databreach.com)** · *breach lookup*: Breach notification and lookup service: check whether your data has surfaced in a known breach.
- **[haveibeenpwned.com](https://haveibeenpwned.com)** · *breach lookup*: The original, most trusted breach-checking database. Also offers an email-notification service for future breaches.
- **[temp-mail.org](https://temp-mail.org)** · *disposable inbox*: A disposable inbox for one-off signups. Much weaker than a real alias service: these addresses are public and guessable, and you lose the inbox forever. Use only for truly throwaway, one-time signups.

#### Research & comparison

- **[privacyguides.org](https://privacyguides.org)** · *independent guide*: The project this site's format draws inspiration from. An excellent independent companion resource with its own deep tool comparisons.
- **[kycnot.me](https://kycnot.me)** · *crypto / no-kyc*: A database of cryptocurrency services that don't require identity verification (KYC).
- **[privacypack.org](https://privacypack.org)** · *curated collection*: Another curated privacy tool collection, worth cross-referencing against this site's own picks.
- **[privacyspy.org](https://privacyspy.org)** · *policy reviewer*: A terms-of-service and privacy-policy reviewer and rating site, reads the fine print so you don't have to.
- **[tosdr.org](https://tosdr.org)** · *policy reviewer*: "Terms of Service; Didn't Read": crowd-reviewed, rated summaries of services' terms of service and privacy policies.
- **[digital-defense.io](https://digital-defense.io)** · *hardening guides*: Digital security and privacy hardening guides, for going deeper than a single tool recommendation.

#### General collections & utilities

- **[fmhy.net](https://fmhy.net)** · *community collection*: A large, community-maintained collection of free media and tool resources covering far more than just privacy.
- **[vert.sh](https://vert.sh)** · *file conversion*: Local, in-browser file format conversion: your files never get uploaded to a server.

#### Worth knowing

- Treat external rating sites as a second opinion, not a verdict. A crowd-reviewed score on tosdr.org or a write-up on privacyspy.org is a useful starting point for judging a service's policy, but always check the date on the review and the policy itself before relying on it.

---
