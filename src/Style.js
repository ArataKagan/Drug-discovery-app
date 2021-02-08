import styled from 'styled-components'

export const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid #ececec;

      :last-child {
        border-right: 0;
      }
    }
  }
`
