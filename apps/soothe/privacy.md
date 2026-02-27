---
layout: default
title: Privacy Policy — Soothe
---

<nav class="breadcrumb"><a href="/">Home</a> / <a href="/apps/">Apps</a> / <a href="/apps/soothe/">Soothe</a> / Privacy</nav>

# Privacy Policy — Soothe

---

## Introduction

Soothe is a crisis-intervention and anxiety relief app for iOS, published by Popcorn Labs. The app guides you through evidence-based calming techniques — including paced breathing, grounding exercises, progressive muscle relaxation, cold splash, distanced self-talk, yoga nidra, and gratitude meditation — using audio-guided scripts with professional voice narration.

Your privacy is fundamental to everything we build. Soothe was designed with a privacy-first architecture: your personal data stays on your device, we do not require accounts or logins, and we never sell your data to anyone. This Privacy Policy explains what information Soothe handles, how it is used, and what rights you have.

By using Soothe, you agree to the practices described in this policy. If you do not agree, please discontinue use of the app.

---

## Data Stored Locally on Your Device

All personal data collected by Soothe is stored exclusively on your device. None of this data is transmitted to Popcorn Labs or any external server.

**First name.** During onboarding, you may enter your first name. This is stored in your device's local storage (UserDefaults) and is used solely to personalize greetings within the app. You are not required to provide your real name.

**Preferences.** Your settings — including selected voice, font theme, color theme, audio volume, haptic feedback toggle, and countdown pace — are stored locally in UserDefaults on your device.

**Feature usage history.** Soothe tracks which tools you have used and how frequently, stored in an on-device SwiftData database. This data powers personalized recommendations within the app and never leaves your device.

---

## Apple HealthKit Integration

Soothe integrates with Apple HealthKit to read and write the following data types:

- **State of Mind** — mood entries logged after completing exercises
- **Mindful Minutes** — session duration recorded upon completing an exercise

HealthKit data remains entirely within the Apple Health ecosystem. Soothe does not store, transmit, or share HealthKit data outside of the Apple Health framework. You control HealthKit permissions through Apple's standard authorization prompt and can revoke access at any time in your device's Settings > Health > Data Access & Devices.

In compliance with Apple's HealthKit guidelines, Soothe does not use HealthKit data for advertising, data mining, or disclosure to third parties.

---

## Analytics — TelemetryDeck

Soothe uses [TelemetryDeck](https://telemetrydeck.com/privacy/), a privacy-first analytics service, to understand how the app is used in aggregate. TelemetryDeck helps us improve Soothe by collecting anonymous usage signals.

**Events tracked include:** which tools are opened, onboarding completion, crisis flow entry, settings changes, and in-app purchase events.

**TelemetryDeck does not collect:**

- IP addresses
- Device identifiers
- Advertising identifiers
- Any personally identifiable information

TelemetryDeck does not use tracking identifiers and cannot identify individual users. For more information, see [TelemetryDeck's privacy policy](https://telemetrydeck.com/privacy/).

---

## Third-Party Services

Soothe uses the following third-party services, each with a limited and specific purpose:

### ElevenLabs (via AIProxy)

When pre-recorded audio is unavailable, Soothe uses ElevenLabs' text-to-speech API as a fallback to synthesize voice narration. Requests are routed through AIProxy, a secure relay service that ensures API keys never reside on your device.

- Only pre-written script text from the app is sent for synthesis. No user-generated content, personal data, or health information is ever transmitted.
- AIProxy does not log or store the content of requests.
- For more information, see [ElevenLabs' privacy policy](https://elevenlabs.io/privacy-policy).

### Apple StoreKit

In-app purchases for premium features (such as additional voices and themes) are processed entirely by Apple through StoreKit. Popcorn Labs does not receive, process, or store any payment information. Apple's terms and privacy policy govern all purchase transactions.

---

## Device Permissions

Soothe may request the following permissions. Each is optional, requested only when needed, and you can change your choices at any time in your device's Settings.

**Microphone.** Used for on-device speech recognition during certain guided exercises (such as distanced self-talk). Audio is processed locally using Apple's Speech framework and is not recorded, stored, or transmitted.

**Speech Recognition.** Used to convert your spoken responses to text displayed on screen during guided exercises. Processing occurs on-device through Apple's Speech framework. Apple's standard speech recognition privacy terms apply.

**HealthKit.** Used to log mindfulness sessions (Mindful Minutes) and mood check-ins (State of Mind) to Apple Health. Requires your explicit authorization.

**Push Notifications.** Used for optional self-care check-in reminders. You may enable or disable notifications at any time.

**Siri & Shortcuts.** Used to allow you to launch exercises via Siri voice commands or the Shortcuts app.

**Background Audio.** Used to continue playing guided audio narration when your screen is locked or when you switch to another app.

---

## Data We Do Not Collect

Soothe does not collect, access, or process any of the following:

- Email addresses, phone numbers, or contact information
- Account credentials (no account creation or login is required)
- Location or geolocation data
- Photos, camera input, or media library content
- Advertising identifiers (IDFA) or ad tracking data
- Cookies or web-based tracking technologies
- Browsing history

**We do not sell, rent, or share your personal data with third parties for any purpose, including advertising or marketing.**

---

## Children's Privacy

Soothe is rated 12+ on the App Store due to medical/treatment information content. The app is not directed at children under the age of 13 and does not knowingly collect personal information from children under 13.

If you are a parent or guardian and believe your child under 13 has provided personal information through Soothe, please contact us at [support@popcornlabs.com](mailto:support@popcornlabs.com) and we will take steps to address the issue.

In compliance with the Children's Online Privacy Protection Act (COPPA), we do not knowingly collect, use, or disclose information from children under 13.

---

## Data Retention and Deletion

All user data (your name, preferences, and feature usage history) is stored locally on your device.

- **Reset within the app.** You can reset all settings and stored data from within Soothe's settings screen.
- **Uninstall.** Uninstalling Soothe removes all locally stored app data from your device.
- **HealthKit data.** Data written to Apple Health persists independently of Soothe. To manage or delete HealthKit entries, use the Apple Health app directly.

Popcorn Labs does not retain any personal data on external servers, so there is no server-side data to delete.

---

## Data Security

Soothe leverages iOS platform security to protect your data:

- All on-device data is protected by your device's hardware encryption and passcode.
- HealthKit data is encrypted by Apple's Health framework.
- Third-party API communication (ElevenLabs via AIProxy) uses encrypted HTTPS connections.
- No API keys or secrets are stored on your device.

While no system is completely immune to risk, we design Soothe to minimize data collection and keep your information under your control.

---

## Your Rights Under GDPR

If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, you have the following rights under the General Data Protection Regulation (GDPR):

- **Right of access** — You may request confirmation of whether your data is being processed and access to that data.
- **Right to rectification** — You may correct inaccurate personal data.
- **Right to erasure** — You may request deletion of your personal data.
- **Right to restriction** — You may request that processing of your data be restricted.
- **Right to data portability** — You may request your data in a structured, machine-readable format.
- **Right to object** — You may object to certain processing of your data.

Because Soothe stores all personal data locally on your device and Popcorn Labs does not have access to it, you exercise most of these rights directly through the app's settings or by uninstalling the app. For any additional requests, contact us at [support@popcornlabs.com](mailto:support@popcornlabs.com).

**Legal basis for processing.** Where applicable, our legal bases for processing are: your consent (for HealthKit, microphone, notifications, and speech recognition), and our legitimate interest in improving the app (for anonymous TelemetryDeck analytics).

---

## Your Rights Under CCPA

If you are a California resident, the California Consumer Privacy Act (CCPA) provides you with the following rights:

- **Right to know** — You may request information about the categories and specific pieces of personal information collected about you.
- **Right to delete** — You may request deletion of personal information collected about you.
- **Right to opt out of sale** — You have the right to opt out of the sale of your personal information. **Soothe does not sell your personal information.**
- **Right to non-discrimination** — You will not be discriminated against for exercising your CCPA rights.

As described above, Soothe stores personal data only on your device. Popcorn Labs does not collect, sell, or share personal information as defined by the CCPA. To exercise any rights, you may reset your data within the app, uninstall the app, or contact us at [support@popcornlabs.com](mailto:support@popcornlabs.com).

---

## International Data Transfers

Soothe's on-device data does not leave your device. When the app communicates with ElevenLabs (via AIProxy) for text-to-speech synthesis, only pre-written script content (not personal data) is transmitted. These transmissions are encrypted and may be processed in the United States or other jurisdictions where the service providers operate. No personally identifiable information is included in these transmissions.

---

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. When we make material changes, we will update the "Last Updated" date at the top of this page. We encourage you to review this policy periodically. Continued use of Soothe after changes are posted constitutes your acceptance of the updated policy.

---

## Contact Us

If you have any questions, concerns, or requests regarding this Privacy Policy or Soothe's data practices, please contact us:

**Popcorn Labs**
Email: [support@popcornlabs.com](mailto:support@popcornlabs.com)
Website: [popcornlabs.com](https://popcornlabs.com)

---

*This privacy policy applies to the Soothe iOS application published by Popcorn Labs. It does not apply to any third-party websites or services linked from within the app.*

---

| | |
|---|---|
| **Effective Date** | February 26, 2025 |
| **Last Updated** | February 26, 2025 |
| **Published by** | Popcorn Labs |
| **Website** | [www.popcornlabs.com](https://www.popcornlabs.com) |
| **Hosted at** | [popcornlabs.com/apps/soothe/privacy](https://www.popcornlabs.com/apps/soothe/privacy/) |