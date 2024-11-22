import React from 'react';
import { Mail, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';

interface ContactProps {
  contact: {
    email: string;
    github: string;
    twitter?: string;
    linkedin?: string;
    zenn?: string;
  };
}

const Contact: React.FC<ContactProps> = ({ contact }) => {
  return (
    <section id="contact" className="scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a
            href={`mailto:${contact.email}`}
            className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
          >
            <Mail className="h-5 w-5" />
            <span>{contact.email}</span>
          </a>
          <a
            href={contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
          {contact.twitter && (
            <a
              href={contact.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
            >
              <Twitter className="h-5 w-5" />
              <span>Twitter</span>
            </a>
          )}
          {contact.linkedin && (
            <a
              href={contact.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
            >
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          )}
          {contact.zenn && (
            <a
              href={contact.zenn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3 text-gray-700 hover:text-gray-900"
            >
              <ExternalLink className="h-5 w-5" />
              <span>Zenn</span>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;