import 'react';

import 'next';
import { Session } from 'next-iron-session';

declare module 'react' {
  export interface StyleHTMLAttributes<T> extends React.HTMLAttributes<T> {
    jsx?: boolean;
    global?: boolean;
  }
}

declare module 'next' {
  export interface NextApiRequest {
    session: Session;
  }
}
