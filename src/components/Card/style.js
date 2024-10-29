import styled from "styled-components";



// Card Filter

export const Filter = styled.div`
    position: absolute;
    top: 15px;
    right: 0px;
`

export const Icon = styled.a`
    color: #aab7cf;
    padding-right: 20px;
    padding-bottom: 5px;
    transition: 0.3s;
    font-size: 16px;

    &:hover {
        color: #4154f1;
    }

    &:focus {
        color: #4154f1;
    }
`

export const DropHeader = styled.li`
    padding: 8px 15px;

    h6 {
        text-transform: uppercase;
        font-size: 14px;
        font-weight: 600;
        letter-spacing: 1px;
        color: #aab7cf;
        margin-bottom: 0;
        padding: 0;
    }
`

export const DropItem = styled.a`
    padding: 8px 15px;
`

// Info Card

export const InfoCard = styled.div`
    padding-bottom: 10px;


    h6 {
        font-size: 28px;
        color: #012970;
        font-weight: 700;
        margin: 0;
        padding: 0;
    }
`

export const CardIcon = styled.div`
    font-size: 32px;
    line-height: 0;
    width: 64px;
    height: 64px;
    flex-shrink: 0;
    flex-grow: 0;

    color: #4154f1;
    background: #f6f6fe;
`