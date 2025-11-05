# Changelog

All notable changes to the Beenzer Landing Page project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.9.10] - 2025-11-05

### Added
- Comprehensive SEO meta tags including Open Graph and Twitter Cards for better social media sharing
- Canonical URLs to prevent duplicate content issues
- "Coming Soon" sections for Staking, Governance, Marketplace, and Stats features in DAO page
- Proper descriptions for $BEEN and $BEENZ tokens
- Complete feature descriptions replacing Lorem ipsum placeholders
- ARIA labels for social media links and interactive elements
- Proper alt text for images and download buttons
- Meta keywords for improved search engine optimization

### Fixed
- Critical typo: "secction" → "section" in index.html
- Animation delay typo in dao.html: "qs" → ".75s"
- Invalid nested heading tags (h3 > h6, h3 > h1) replaced with semantic HTML
- Incomplete sentence in wallet connection feature description
- Duplicate tokenomics content in DAO page
- Empty href attributes for App Store download links
- Missing muted attribute on autoplay videos for browser compliance
- Broken social media links in footer (now pointing to actual Beenzer accounts)

### Changed
- Improved meta descriptions for both index.html and dao.html
- Updated page titles to be more descriptive and SEO-friendly
- Changed inappropriate h3 tags to p tags for better semantic HTML
- Enhanced feature descriptions with Beenzer-specific content
- Updated copyright year to 2023
- Replaced generic social media links with actual Beenzer community links

### Removed
- Lorem ipsum placeholder text from Features section
- Duplicate and redundant DAO tokenomics content

## [0.9.9] - 2023-XX-XX

### Added
- Initial landing page structure
- Basic NFT marketplace functionality
- Team section with international team members
- News section with latest updates
- Wallet integration support

### Changed
- Design improvements and modern UI updates
- Enhanced mobile responsiveness

---

## Release Notes

### Version 0.9.10 Highlights

This release focuses on completing the website content, improving SEO, and fixing structural HTML issues. All placeholder content has been replaced with proper Beenzer-specific descriptions, and the DAO page now includes proper "Coming Soon" sections for upcoming features.

**Key improvements:**
- ✅ Complete website content (no more Lorem ipsum!)
- ✅ Professional SEO optimization
- ✅ Better social media integration
- ✅ Improved accessibility
- ✅ Fixed HTML validation issues

### Development Workflow

This project now uses a `dev` branch for development work. All changes should be made in the `dev` branch and merged to `main` when ready for production deployment.

See [README.md](README.md) for detailed development guidelines.
