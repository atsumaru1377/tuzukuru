import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { breadCrumbs } from './type';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();;
}


export default function ActiveLastBreadcrumb(props:breadCrumbs) {
  return (
    <div role="presentation" onClick={handleClick} style={{
      position:"relative",width:"100%",padding:"20px"
    }}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link underline="hover" color="inherit" href="/">
          TOP
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href = {props.secondHref}
        >
          {props.second}
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href = {props.thirdHref}
          aria-current="page"
        >
          {props.third}
        </Link>
      </Breadcrumbs>
    </div>
  );
}
