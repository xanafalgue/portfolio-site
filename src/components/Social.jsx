import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

const socialItems = [
    {icon: GitHubIcon, url: "https://github.com/xanafalgue"},
    {icon: LinkedInIcon, url: "https://www.linkedin.com/in/michael-giustiniani/"}
]


export default function Social({ direction }) {
  return (
    <Grid container direction={direction || "row"} spacing={1}>
        {socialItems.map((item) => (
             <Grid item>
                <Link href={item.url}>
                    <IconButton>
                        <item.icon />
                    </IconButton>
                </Link>
            </Grid>
        ))}
    </Grid>
  )
}
