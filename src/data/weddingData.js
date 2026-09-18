// ─────────────────────────────────────────────────────────
//  EDIT THIS FILE to personalize the invitation.
//  Every section of the site reads its content from here.
// ─────────────────────────────────────────────────────────

const weddingData = {
  bride: 'Emma',
  groom: 'James',
  monogram: 'E & J',
  quote: '"Above all, revive love, for it is the perfect bond."',

  // ISO date used by the countdown — keep the format YYYY-MM-DDTHH:mm:ss
  weddingDateISO: '2027-06-18T16:00:00',
  weddingDateDisplay: '18 . 06 . 2027',
  weddingDayLabel: 'Friday at 4:00 PM',

  // Wedding Details — three cards: Date & Time, Location, Poruwa Ceremony
  details: {
    dateTime: {
      day: 'Friday',
      date: '18 June 2027',
      display: '18 . 06 . 2027',
      ceremony: {
        label: 'Ceremony',
        time: '4:00 PM',
        note: 'Kindly be seated by 3:40 PM',
      },
      reception: {
        label: 'Reception',
        time: '6:30 PM',
        note: 'Dinner, music & dancing till late',
      },
      note:
        'The day opens with an auspicious Nekatha — the sacred hour chosen by our astrologer for the Poruwa ceremony.',
    },

    location: {
      note: 'Both venues sit in Colombo, just a short ride from one another.',
      venues: [
        {
          label: 'Ceremony',
          name: 'Hotel Galadari',
          address: '64 Lotus Road, Colombo 01',
          time: '4:00 PM',
          mapsUrl:
            'https://www.google.com/maps/dir/?api=1&destination=Hotel+Galadari,+64+Lotus+Road,+Colombo+01,+Sri+Lanka',
        },
        {
          label: 'Reception',
          name: 'Shangri-La Hotel Colombo',
          address: '1 Galle Face, Colombo 02',
          time: '6:30 PM',
          mapsUrl:
            'https://www.google.com/maps/dir/?api=1&destination=Shangri-La+Hotel,+1+Galle+Face,+Colombo+02,+Sri+Lanka',
        },
      ],
    },

    poruwa: {
      time: '4:30 PM',
      title: 'The Poruwa Ceremony',
      tagline: 'A sacred Kandyan rite, beneath a roof of betel, jasmine and gold.',
      description:
        'We will exchange our vows upon the Poruwa — a hand-carved wooden platform dressed in flowers — as the magul bera drums herald our union.',
      idea: {
        title: 'A Lantern of Wishes',
        description:
          'As dusk falls over our garden, light a floating lotus lantern on the pool. Every lantern carries a wish for us — and one we will keep for you, forever.',
      },
    },
  },

  story:
    "From a chance meeting to forever — we can't wait to celebrate the next chapter of our story with the people we love most.",

  guestGuide: [
    {
      title: 'Confirm Your Attendance',
      description: 'Please RSVP below by 1st May 2027 so we can prepare a seat for you.',
    },
    {
      title: 'Arrive on Time',
      description: 'The ceremony begins promptly — kindly arrive 20 minutes early.',
    },
    {
      title: 'Dress Code',
      description: 'Formal attire in white, gold & champagne tones. Please avoid all-white.',
    },
    {
      title: 'Gift Registry',
      description: 'Your presence is the greatest gift. A wishing well will be available for those who wish to contribute.',
    },
    {
      title: 'Capture the Moment',
      description: 'Feel free to take photos — please share them with us using our wedding hashtag.',
    },
    {
      title: 'Children',
      description: 'We love your little ones, but our celebration is an adults-only occasion.',
    },
  ],

  hashtag: '#EmmaAndJamesForever',

  rsvpDeadline: '1st May 2027',

  finalReminder: {
    heading: "Don't Miss Our Special Day!",
    message:
      "Emma & James can't wait to celebrate with you. Join us for our special day — every moment means more with you there.",
    buttonText: 'RSVP Now',
  },

  contact: {
    email: 'emma.james.wedding@example.com',
    phone: '+94 77 123 4567',
  },

  images: {
    hero: 'https://images.unsplash.com/photo-1721401870202-8e2264ecced2?fm=jpg&q=80&w=1600&auto=format&fit=crop',
    embrace: 'https://images.unsplash.com/photo-1761211488163-67bc659a8180?fm=jpg&q=80&w=1600&auto=format&fit=crop',
    rings: 'https://images.unsplash.com/photo-1553915632-175f60dd8e36?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    bouquet: 'https://images.unsplash.com/photo-1578534102052-70f4c14ee0e7?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    flatlay: 'https://images.unsplash.com/photo-1505433922285-c74dc4914347?fm=jpg&q=80&w=1200&auto=format&fit=crop',
    toast: 'https://images.unsplash.com/photo-1519741497674-611481863552?fm=jpg&q=80&w=1200&auto=format&fit=crop',
  },
}

export default weddingData
