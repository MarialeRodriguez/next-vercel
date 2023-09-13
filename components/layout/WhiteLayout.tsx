import { FC } from "react";

export const WhiteLayout: FC = ({ children }) => {
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
