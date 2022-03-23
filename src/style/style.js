import styled, {css} from 'styled-components';

const CarteStyle = styled.div`
    border-radius: 5px;
    width: 18rem;
    border: 1px solid #0f5132;
    h6{
        color: #0f5132;
    }
    #approuve{
        visibility:hidden;
    }
    #desapprouve{
        visibility:visible;
    }

    :hover {
        box-shadow: 0 4px 12px 0 rgba(106, 108, 143, 0.37);
    }

    ${props => !props.resultat && css`
        width: 18rem;
        border: 1px solid #ce0033;
        h6{
            color: #ce0033;
        }
        #approuve{
            visibility:visible;
        }
        #desapprouve{
            visibility:hidden;
        }
    `}
`;


export default CarteStyle;