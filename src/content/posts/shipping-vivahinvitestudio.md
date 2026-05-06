---
title: "Shipping Vivah Invite Studio: AI, Architecture, and My First Major Product Launch"
slug: "shipping-vivah-invite-studio"
description: "After months of building in public, I'm thrilled to launch Vivah Invite Studio. Here's a deep dive into the tech stack, the AI architecture, and the B2B2C growth loops I built."
image: "../../assets/product_launch_edt.webp"
pubDate: "2026-05-06"
tags: ["Product Launch", "SaaS", "React", "Build in Public", "AI", "Supabase"]
---

A few months ago, I wrote about quitting my Cloud Engineering job to solve the logistical nightmare of Indian weddings. While building the core VivahSphere OS to manage budgets and shared family expenses, I realized the very first touchpoint of a wedding was also completely broken.

Traditional invitation makers force you into a box, and coordinating RSVPs across multiple events can be a logistical nightmare.

So, I decided to fix it. Today, I am incredibly proud to announce the launch of my first flagship SaaS product under Ekarna Interactive: **Vivah Invite Studio**.

### What is Vivah Invite Studio?

It is an advanced, AI-powered platform for generating customized digital wedding invitations. But I didn't want to just build another template wrapper. I wanted to build a complete logistical hub for the modern couple. 

Here is what the studio actually does under the hood:

* **AI Magic Studio:** Powered by Google Gemini, the studio generates culturally-tailored artwork and interactive visual prompt suggestions. It dynamically synthesizes multi-resolution variants (Desktop, Mobile, and Social) simultaneously.
* **Smart Itineraries:** Indian weddings are multi-day affairs. I engineered a Smart Itinerary Builder with native Google Places integration, which generates instant mapping directions for guests.
* **Guest CRM:** I built a seamless Guest CRM featuring a floating WhatsApp RSVP widget. It collects atomic responses across multiple sub-events, displaying actual attending headcounts natively isolated by event.

### The Tech Stack & Architecture

As a Technical Product Manager and solo founder, my goal was to keep the architecture lean but highly scalable. 

The application is built on a modern stack utilizing **React 19+, Vite, Supabase, and Golang**. To power the generative AI capabilities and interactive visual cards, I integrated Google Gemini LLMs. The entire viral sharing loop is driven by an AI Welcome Message generator and rich WhatsApp share cards.

### Engineering the Growth Loop (B2B2C)

One of the biggest technical and business challenges was figuring out customer acquisition. Instead of just burning capital on Meta Ads, I designed and launched a robust B2B2C affiliate engine directly into the product architecture.

The platform features a dedicated Partner Dashboard for event planners and influencers. Wedding vendors (like makeup artists and photographers) can manage custom promo codes and track their referrals, successfully shifting my acquisition strategy towards a highly profitable local vendor referral network.

### The Official Launch Offer

I have posted the polished, official launch announcement over on the [VivahSphere Blog](https://vivahsphere.com/blog/introducing-vivah-invite-studio). 

To celebrate getting this out into the wild, we are offering an exclusive discount: **45% OFF for the first 55 paid users!**
* The **Standard Plan** (normally ₹1989 inclusive of GST) drops to **₹1094**.
* The **Premium Plan** (normally ₹2499) drops to **₹1374**.

Building this has been an incredible journey from enterprise integration to zero-to-one SaaS development. If you are getting married soon, or just want to play around with the AI Magic Studio, you can **[jump into the platform here](https://app.vivahinvite.com/)**. 

Back to building. 🚀