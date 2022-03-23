import styled, { css } from "styled-components";

const StyledCard = styled.div`
    border-radius: 10px;
    width: 18rem;
    border: 1px solid #198754;
    h6{
        
    }
    #approuve{
        visibility:visible;
    }
    #desapprouve{
        visibility:visible;
    }
    :hover {
        box-shadow: 0 4px 12px 0 rgba(106, 108, 143, 0.37);
    }
    ${props => !props.etat && css`
        width: 18rem;
      
        h6{
            
        }
        #approuve{
            visibility:visible;
        }
        #desapprouve{
           
        }
    `}
`;
export default StyledCard;