import { describeGallerySmoke } from '@museumwnf/viewer-layout/dxa/testing'
import { catalogues as sharedTexts } from '@museumwnf/viewer-i18n/gallery'
import manifest from '@inventory-data/manifest.json'
import ownTexts from '../locales/en.json'
import config from '../src/dataset.config.js'

// The gallery family's smoke test, run against this gallery's own dataset.
// The picks are records of that dataset the tests look for; each is described
// in the suite's own documentation (@museumwnf/viewer-layout/dxa/testing).
describeGallerySmoke({
  config,
  sharedTexts,
  ownTexts,
  manifest,
  namespace: 'ceramics',
  picks: {
    collection: {
      tiles: 9,
      paginations: 2,
    },
    about: 'Ceramics',
    credits: 'LOCAL PROJECT TEAMS',
    chip: {
      item: '1d61ec66-2c37-507e-9e98-65e166b78f82',
      project: 'Discover Islamic Art',
      className: 'mwnf-chip--ISLandEPM',
    },
    noticeItem: '94f76ace-8af6-5ec8-aec6-d15a08b2f250',
    dynasty: {
      item: '75bb1422-0084-5c89-9bec-838982478b11',
      name: 'Other Dynasties',
    },
    timeline: {
      code: 'uk',
      id: 'gbr',
      country: 'United Kingdom',
    },
    partner: {
      id: 'dbb0a6e3-2c73-51cc-8f47-ebf68dde4d73',
      name: 'National Tile Museum',
      city: 'Lisbon',
      country: 'Portugal',
      objects: 4,
    },
  },
})
