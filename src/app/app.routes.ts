import { Routes } from '@angular/router';
import { Portfolio } from './pages/portfolio/portfolio';
import { LegalNotice } from './pages/legal-notice/legal-notice';
import { PrivacyPolicy } from './pages/privacy-policy/privacy-policy';

export const routes: Routes = [
  {
    path: '',
    component: Portfolio,
  },
  {
    path: 'legal-notice',
    component: LegalNotice,
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicy,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
