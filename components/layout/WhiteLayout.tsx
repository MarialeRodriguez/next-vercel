import { FC, ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

export const WhiteLayout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      padding: '10px',
      borderRadius: '5px',
      color: 'black'
    }}>

    <h3>White-Layout</h3>
      <div>
        { children }
      </div>
    </div>
  )
}
