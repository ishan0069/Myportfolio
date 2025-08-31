import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { FiDribbble } from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className="header_socials d-none d-md-flex flex-column align-items-center gap-3">
      <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer"><AiFillLinkedin /></a>
      <a href="http://github.com" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
      <a href="http://dribbble.com" target="_blank" rel="noopener noreferrer"><FiDribbble /></a>
    </div>
  )
}

export default HeaderSocials;