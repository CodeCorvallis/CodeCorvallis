# Code Corvallis Website

## Welcome to Code Corvallis

### Interested in coding and software development?
Join us at [Code Corvallis](https://codecorvallis.com), where programmers, coders, and software engineers in Corvallis come together to connect, share, and learn. Whether you’re a seasoned developer or just starting out, this is a welcoming space for all levels of experience.

At Code Corvallis, we explore all aspects of software development in a relaxed, community-focused atmosphere. Our meetups feature short presentations by local developers, opportunities for social networking, and insights into what programmers in Corvallis are up to.

Corvallis has a unique, underground tech community, and Code Corvallis offers a window into this vibrant scene. We’re here to create connections, foster collaboration, and provide a space where coders can come together and grow. We keep things simple, focused, and tailored to the needs of our coding community.

Let’s come together to share knowledge and dive into the world of software development! Follow us on our website to stay updated on [upcoming events](https://codecorvallis.com/events) and join us at our next meetup.

## How to Submit a Proposal

Interested in presenting at a Code Corvallis event? We welcome proposals from all community members!

- **Submit a Proposal**: You can submit a proposal for a talk or presentation by [opening an issue](https://github.com/CodeCorvallis/CodeCorvallis/issues/new?template=proposal.md) and following the template provided.
- **Presentation Template**: Include your name, email, presentation title, description, preferred date, and any additional notes.

## Contributing to the Website

We welcome contributions to improve the Code Corvallis website! Here’s how you can contribute:

- **Open an Issue**: If you find any bugs or have suggestions for improvements, please [open an issue](https://github.com/CodeCorvallis/CodeCorvallis/issues/new?template=bug-or-improvement.md).
- **Submit a Pull Request (PR)**: If you want to directly make changes, feel free to submit a pull request. We recommend following the existing structure and style when making edits.

## Development Setup

To work on the website locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone git@github.com:CodeCorvallis/CodeCorvallis.git
   cd CodeCorvallis
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run docs:preview
   ```
   This will start a local development server, and you can view the site in your browser at `http://localhost:5173/`.


## Project Structure

- **docs/**: This is the main content folder. All markdown files (e.g., `index.md`, `events.md`) for the website are located here.
  - **.vitepress/**: Contains VitePress configuration and theming files.
  - **public/**: This folder contains static assets such as images, icons, and the site manifest.

## Get in Touch

For any inquiries or if you’d like to get involved, feel free to [contact us](mailto:info@codecorvallis.com).
