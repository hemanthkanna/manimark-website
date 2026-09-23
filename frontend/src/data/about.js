// Source of truth: MM-WEB-ABOUT_US-P01.psd
import founderSketch from '../assets/images/about-founder-sketch.png'
import gateSketch from '../assets/images/about-gate-sketch.png'
import son1Sketch from '../assets/images/about-son1-sketch.png'
import son2Sketch from '../assets/images/about-son2-sketch.png'
import brandCavinKare from '../assets/images/brand-cavinkare.png'
import brandAachi from '../assets/images/brand-aachi.png'
import brandAu from '../assets/images/brand-au.png'
import brandPaperboat from '../assets/images/brand-paperboat.png'

export const heroIntro = {
  eyebrow: 'A Legacy of Trusted Snacks',
  body: 'From a small traditional peanut candy maker in Arcot to a trusted snack manufacturer across Tamil Nadu.',
}

// The vertical timeline down the middle of the page.
export const timeline = [
  {
    id: 'the-beginning',
    title: 'The Beginning',
    image: founderSketch,
    imageAlt: 'Sketch portrait of Mr. A. Sundar Singh Nadar',
    align: 'right',
    heading: 'Mr. A. Sundar Singh Nadar',
    paragraphs: [
      'began the Manimark journey with a simple mission - to create hygienic and delicious traditional snacks.',
      'Using his natural skills, he mastered the craft of preparing authentic peanut candy and traditional snacks.',
      'From the town of Arcot in Vellore district, he dreamed of bringing quality snacks to families across Tamil Nadu.',
    ],
    sideImage: gateSketch,
    sideImageAlt: 'Sketch of the historic Arcot gate',
  },
  {
    id: 'the-next-generation',
    title: 'The Next Generation',
    align: 'left',
    paragraphs: [
      'The vision was carried forward by the next generation of leadership. With modern production technologies and strong dedication to quality, the company expanded its operations while preserving traditional taste.',
    ],
    focus: {
      label: 'Their focus remained simple:',
      items: ['High quality snacks', 'Authentic ingredients', 'Affordable pricing for families'],
    },
    people: [
      { name: 'Mr. S. Enose Ruban', image: son1Sketch },
      { name: 'Mr. S. Epron', image: son2Sketch },
    ],
  },
]

export const pillars = [
  {
    id: 'trusted-by-leading-brands',
    title: 'Trusted by Leading Brands',
    body: 'Manimark proudly supports many well-known food brands with reliable snack manufacturing.',
    logos: [
      { src: brandCavinKare, alt: 'CavinKare' },
      { src: brandAachi, alt: 'Aachi' },
      { src: brandAu, alt: 'a1 Chips' },
      { src: brandPaperboat, alt: 'Paper Boat' },
    ],
  },
  {
    id: 'quality-hygiene',
    title: 'Quality & Hygiene First',
    body: 'Manimark produces a wide variety of delicious snack products crafted using:',
    list: ['High-grade nuts', 'Natural spices', 'Authentic ingredients'],
  },
]

export const closing = {
  title: 'Thank You to Our Customers',
  body: 'The love of our customers has helped Manimark grow stronger every year.\nFrom children to elders, our snacks continue to bring joy to families across the country.',
}
