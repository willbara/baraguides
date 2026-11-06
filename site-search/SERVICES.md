# Privacy Site · Services

Plain list of every service on the site, by category. Everything else (reviews, pros and cons, prices, links) lives only in the `tools/*.html` pages.

`site-search/build_index.py` reads this file to generate `site-index.js`: it needs the `### Category` headings, the `##### Name · *verdict*` headings, and the backtick pill row under each. Keep those formats.

---

## Network & Browsing

### Browsers & Search

##### Brave · *the default pick*

`chromium` · `open source` · `ad blocking` · `anti-fingerprinting` · `free`

##### Firefox · *the gecko pick*

`gecko` · `open source` · `free`

##### Helium · *the one to watch*

`chromium` · `open source` · `ad blocking` · `no account` · `free`

##### Mullvad Browser · *recommended secondary*

`gecko` · `anti-fingerprinting` · `open source` · `free`

##### Vivaldi · *the power-user pick*

`chromium` · `ad blocking` · `customizable` · `free`

##### LibreWolf · *secondary, research-grade*

`gecko` · `open source` · `free`

##### Orion · *the webkit pick*

`🇺🇸 usa` · `🍎 apple only` · `webkit` · `closed source` · `free`

### DNS & Network

##### AdGuard DNS · *the default pick*

`🇨🇾 cyprus` · `encrypted dns` · `ad blocking` · `free tier`

##### Quad9 · *the neutral pick*

`🇨🇭 switzerland` · `encrypted dns` · `no logs` · `nonprofit` · `free`

##### NextDNS · *the power-user pick*

`🇺🇸 usa` · `encrypted dns` · `customizable` · `free tier`

##### Self-host · *the self-host pick*

`self-hostable` · `open source` · `customizable` · `ad blocking` · `free`

##### Technitium DNS Server · *the full-stack self-host pick*

`self-hostable` · `open source` · `encrypted dns` · `customizable` · `free`

##### ControlD · *the customization pick*

`🇨🇦 canada` · `encrypted dns` · `customizable` · `free tier`

##### ReThinkDNS · *the all-in-one pick*

`🇮🇳 india` · `encrypted dns` · `partially open source` · `no account` · `free tier`

##### Cloudflare DNS · *the audited pick*

`🇺🇸 usa` · `encrypted dns` · `audited` · `partially open source` · `free`

### VPNs

##### Proton VPN · *the default pick*

`🇨🇭 switzerland` · `audited no-logs` · `open source` · `free tier`

##### Mullvad · *the anonymity pick*

`🇸🇪 sweden` · `anonymous signup` · `cash accepted` · `audited` · `paid`

##### Windscribe · *the everyday alternative*

`🇨🇦 canada` · `audited` · `ad blocking` · `free tier`

##### IVPN · *the no-account pick*

`🇬🇮 gibraltar` · `anonymous signup` · `multihop` · `audited` · `paid`

##### Obscura VPN · *the split-trust pick*

`multihop` · `wireguard` · `audited` · `paid`

##### AzireVPN · *the blind-operator pick*

`🇸🇪 sweden` · `audited` · `ram-only` · `wireguard` · `paid`

##### NymVPN · *the mixnet pick*

`🇨🇭 switzerland` · `decentralized` · `open source` · `audited` · `paid`

### Anonymizing Networks

##### Tor · *the default pick*

`onion-routed` · `nonprofit` · `open source` · `free`

##### Orbot · *the mobile pick*

`onion-routed` · `open source` · `free`

##### I2P · *the internal network*

`onion-routed` · `open source` · `free`

##### Snowflake · *the censorship bridge*

`free`

##### Lokinet · *the experimental pick*

`onion-routed` · `open source` · `free`

---

## Credentials & Identity

### Password Managers

##### Bitwarden · *the default pick*

`🇺🇸 usa` · `open source` · `audited` · `self-hostable` · `free tier`

##### 1Password · *the premium pick*

`🇨🇦 canada` · `closed source` · `audited` · `paid`

##### KeePassXC · *the local-only pick*

`local-first` · `open source` · `no account` · `totp` · `free`

##### Proton Pass · *the ecosystem pick*

`🇨🇭 switzerland` · `partially open source` · `audited` · `aliasing` · `free tier`

##### Dashlane · *the mainstream one, not a pick*

`🇺🇸 usa` · `zero-knowledge` · `closed source` · `paid`

##### NordPass · *the mainstream Nord-family pick*

`closed source` · `zero-knowledge` · `free tier`

### 2FA & Hardware Keys

##### YubiKey 5 Series · *the default key*

`🇸🇪 sweden` · `fido2` · `totp` · `closed source` · `paid`

##### Nitrokey 3 · *the open-source key*

`🇩🇪 germany` · `fido2` · `totp` · `open source` · `paid`

##### Aegis Authenticator · *the android totp pick*

`android only` · `totp` · `open source` · `local-first` · `free`

##### Ente Auth · *the cross-platform totp pick*

`totp` · `open source` · `e2ee` · `audited` · `free`

##### Proton Auth · *the proton-ecosystem pick*

`all platforms` · `totp` · `open source` · `e2ee` · `free`

### Alias Services

##### SimpleLogin · *the default pick*

`open source` · `audited` · `self-hostable` · `reply-from-alias` · `free tier`

##### Addy.io · *the independent pick*

`open source` · `audited` · `self-hostable` · `reply-from-alias` · `free tier`

### Personal Data Removers

##### EasyOptOuts · *the recommended pick*

`paid`

##### Incogni · *the broad-coverage pick*

`paid`

##### DeleteMe · *the established pick*

`paid`

---

## Communication

### Messengers

##### Signal · *the default pick*

`🇺🇸 usa` · `e2ee always` · `metadata-resistant` · `open source` · `free`

##### iMessage · *the apple-baseline pick*

`🍎 apple only` · `e2ee` · `closed source` · `free`

##### SimpleX · *the no-identifier pick*

`no identifier required` · `e2ee always` · `open source` · `metadata-resistant` · `free`

##### Matrix / Element · *the federation pick*

`federated` · `e2ee optional` · `self-hostable` · `open source` · `free`

##### Briar · *the off-grid pick*

`peer-to-peer` · `onion-routed` · `works offline` · `open source` · `free`

##### Threema · *the pay-once pick*

`🇨🇭 switzerland` · `no phone number` · `one-time purchase` · `partially open source`

##### Session · *the onion-routed pick*

`onion-routed` · `no phone number` · `decentralized` · `open source` · `free`

##### Telegram · *the one to avoid*

`e2ee not default` · `secret chats only` · `custom mtproto` · `cloud-stored history` · `free`

### Email Providers

##### Proton Mail · *the default pick*

`🇨🇭 switzerland` · `zero-knowledge` · `partially open source` · `audited` · `free tier`

##### mailbox · *the standards pick*

`🇩🇪 germany` · `imap/smtp` · `pgp` · `paid`

##### Tuta · *the all-in encryption pick*

`🇩🇪 germany` · `post-quantum` · `open source` · `free tier`

##### Posteo · *the anonymity pick*

`🇩🇪 germany` · `anonymous signup` · `cash accepted` · `imap/smtp` · `paid`

##### StartMail · *the alias-first pick*

`🇳🇱 netherlands` · `aliasing` · `imap/smtp` · `pgp` · `paid`

##### Disroot · *the nonprofit pick*

`🇳🇱 netherlands` · `nonprofit` · `imap/smtp` · `free`

##### GnuPG · *the reference implementation*

`all platforms` · `pgp` · `open source` · `free`

##### Gpg4win · *the windows pick*

`windows only` · `pgp` · `open source` · `free`

##### GPG Suite · *the macos option*

`macos only` · `pgp` · `free tier`

##### OpenKeychain · *the android standby*

`android only` · `f-droid` · `pgp` · `open source` · `free`

##### Thunderbird · *the low-friction pick*

`desktop app` · `pgp` · `open source` · `free`

### Social Media

##### Mastodon · *the default pick*

`federated` · `no algorithmic feed` · `open source` · `free`

##### Lemmy · *the reddit-alternative pick*

`federated` · `no algorithmic feed` · `open source` · `self-hostable` · `free`

##### PeerTube · *the youtube-alternative pick*

`federated` · `no algorithmic feed` · `open source` · `self-hostable` · `free`

##### Pixelfed · *the instagram-alternative pick*

`federated` · `no algorithmic feed` · `open source` · `free`

##### Nostr · *the key-based pick*

`decentralized` · `no algorithmic feed` · `open source` · `free`

##### Primal · *the cross-platform client*

`decentralized` · `all platforms` · `open source` · `free tier`

##### Damus · *the relay-transparent client*

`decentralized` · `all platforms` · `open source` · `free tier`

### Communities

##### Fluxer · *the discord-alternative pick*

`🇸🇪 sweden` · `self-hostable` · `open source` · `free tier`

##### Stoat · *the discord-alternative pick*

`🇬🇧 uk` · `self-hostable` · `open source` · `free`

### Frontends

##### LibRedirect · *start here*

`browser extension` · `open source` · `free`

##### Redlib · *the reddit pick*

`web-based` · `self-hostable` · `open source` · `free`

##### Invidious · *the full-interface pick*

`web-based` · `self-hostable` · `open source` · `free`

##### Piped · *the self-host pick*

`web-based` · `self-hostable` · `open source` · `free`

##### FreeTube · *the desktop pick*

`desktop app` · `local-first` · `open source` · `free`

##### NewPipe · *the android pick*

`android only` · `f-droid` · `open source` · `free`

##### LibreTube · *the android alternative*

`android only` · `f-droid` · `open source` · `free`

---

## Data & Files

### Cloud Storage & Sync

##### Filen · *the default pick*

`🇩🇪 germany` · `zero-knowledge` · `e2ee` · `all platforms` · `free tier`

##### Tresorit · *the premium pick*

`🇨🇭 switzerland` · `e2ee` · `audited` · `free tier`

##### Syncthing · *the no-cloud pick*

`peer-to-peer` · `open source` · `no account` · `free`

##### Proton Drive · *the ecosystem pick*

`🇨🇭 switzerland` · `e2ee` · `free tier`

##### Cryptomator · *the keep-your-cloud pick*

`e2ee` · `open source` · `audited` · `no account` · `free tier`

##### Nextcloud · *the self-hosted pick*

`self-hostable` · `open source` · `e2ee optional` · `free`

##### pCloud · *the lifetime-plan pick*

`🇨🇭 switzerland` · `one-time purchase` · `e2ee optional` · `free tier`

##### Mega NZ · *the generous-free-tier pick*

`e2ee` · `free tier`

##### Ente Photos · *the photos pick*

`e2ee` · `open source` · `free tier`

##### IceDrive · *verify before trusting*

`client-side encryption option` · `proprietary crypto` · `not independently audited` · `cheap`

##### Internxt · *verify before trusting*

`🇪🇸 spain` · `zero-knowledge` · `post-quantum` · `audited` · `free tier`

### Notes

##### Notesnook · *the encrypted-sync pick*

`e2ee` · `open source` · `audited` · `all platforms` · `free tier`

##### Obsidian · *the local-first pick*

`local-first` · `closed source` · `free tier`

##### Standard Notes · *the established pick*

`e2ee` · `open source` · `audited` · `free tier`

##### Logseq · *the open-source outliner pick*

`local-first` · `open source` · `free`

##### Joplin · *the bring-your-own-sync pick*

`open source` · `e2ee optional` · `local-first` · `free`

##### Cryptee · *the notes-and-photos pick*

`e2ee` · `zero-knowledge` · `web-based` · `works offline` · `free tier`

### File Sharing

##### LocalSend · *the default pick*

`open source` · `peer-to-peer` · `no account` · `free`

##### OnionShare · *the anonymity pick*

`open source` · `onion-routed` · `no account` · `free`

##### Buzzheavier · *the quick-link pick*

`web-based` · `no account` · `free tier`

##### PrivateBin · *the text/snippet pick*

`open source` · `zero-knowledge` · `self-hostable` · `no account` · `free`

### Office Suites

##### OnlyOffice · *the default pick*

`partially open source` · `self-hostable` · `desktop app` · `free tier`

##### LibreOffice · *the classic pick*

`open source` · `local-first` · `no account` · `free`

##### OpenOffice · *the legacy pick*

`open source` · `local-first` · `free`

##### CryptPad · *the encrypted-collab pick*

`e2ee` · `zero-knowledge` · `real-time collaboration` · `open source` · `free tier`

##### Fileverse · *the one to watch*

`decentralized` · `e2ee` · `free`

### Encryption

##### VeraCrypt · *the default pick*

`open source` · `audited` · `desktop app` · `hidden volumes` · `free`

##### LUKS · *the linux-native pick*

`linux only` · `open source` · `free`

##### BitLocker · *the windows pick, with caveats*

`windows only` · `closed source` · `paid`

---

## Platforms

### Mobile OS

##### iOS · *the default pick*

`🍎 apple only` · `closed source` · `free`

##### GrapheneOS · *the maximum-security pick*

`open source` · `verified boot` · `sandboxed play` · `free`

##### CalyxOS · *the middle-ground pick*

`open source` · `nonprofit` · `free`

##### LineageOS · *the old-hardware pick*

`open source` · `free`

### Desktop OS

##### Fedora Workstation · *the default pick*

`open source` · `free`

##### Secureblue · *the hardened-atomic pick*

`immutable` · `open source` · `free`

##### Tails · *the amnesic pick*

`amnesic` · `onion-routed` · `free`

##### Qubes OS · *the compartmentalized pick*

`compartmentalized` · `open source` · `free`

##### Whonix on Qubes · *the hardened-anonymity pick*

`compartmentalized` · `onion-routed` · `open source` · `free`

##### Arch Linux · *the diy pick*

`open source` · `free`

##### NixOS · *the declarative pick*

`open source` · `free`

---

## Money & Connectivity

### Financial Services

##### Privacy.com · *the virtual card pick*

`us only` · `virtual cards` · `free tier`

##### MySudo · *the identity-compartmentalization pick*

`virtual cards` · `aliasing` · `paid`

### Cellular Services

##### Cape · *the privacy-MVNO pick*

`us only` · `mvno` · `minimal data collection` · `paid`

##### Phreeli · *the anonymity-leaning pick*

`mvno` · `minimal data collection` · `paid`

##### Silent Link · *the anonymous esim pick*

`esim only` · `anonymous signup` · `crypto accepted` · `paid`

##### Saily · *the travel-convenience pick*

`esim only` · `paid`

---

## Other

### AI Tools

##### Duck.ai · *the no-account pick*

`cloud` · `no account` · `free`

##### Le Chat · *the eu-jurisdiction pick*

`cloud` · `🇫🇷 france` · `free tier`

##### Lumo · *the proton-ecosystem pick*

`cloud` · `zero-knowledge` · `free tier`

##### Venice AI · *the no-logging pick*

`cloud` · `no logs` · `crypto accepted` · `free tier`

##### Ollama · *the local pick*

`local-first` · `works offline` · `no account` · `free`

### Maps

##### Apple Maps · *the ecosystem pick*

`🍎 apple only` · `closed source` · `free`

##### CoMaps · *the open-source pick*

`open source` · `openstreetmap` · `no account` · `works offline` · `free`

##### OsmAnd · *the configurable pick*

`open source` · `openstreetmap` · `works offline` · `no account` · `free tier`

##### Magic Earth · *the offline-navigation pick*

`closed source` · `no account` · `free tier`

##### Kagi Maps · *the early-stage pick*

`free`
