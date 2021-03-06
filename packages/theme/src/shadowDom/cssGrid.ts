import { css } from 'lit-element'

export const cssGrid = css`
[c6o~=container] {
  width: 100%;
  margin: 0 auto;
  display: block;
  max-width: 1440px;
}
[c6o~=container]:not(.full-width) {
  padding-left: 30px;
  padding-right: 30px;
}

[c6o~=grid] {
  display: grid !important;
  grid-gap: 30px;
  grid-template-columns: repeat(12, 1fr);
}

[c6o~=vertical-start] {
  align-items: start;
}

[c6o~=vertical-center] {
  align-items: center;
}

[c6o~=vertical-end] {
  align-items: end;
}

[c6o~=between] {
  justify-content: center;
}

[c6o~=gap-none] {
  grid-gap: 0;
  margin-bottom: 0;
}

[c6o~=gap-column-none] {
  grid-column-gap: 0;
}

[c6o~=gap-row-none] {
  grid-row-gap: 0;
  margin-bottom: 0;
}

[c6o~=first] {
  order: -1;
}

[c6o~=last] {
  order: 12;
}

[c6o~=hide] {
  display: none !important;
}

[c6o~=show] {
  display: initial !important;
}

[c6o~=grid][c6o*="@"] {
  grid-template-columns: 12fr;
}

[c6o~=grid][c6o*="@sm"], [c6o~=grid][c6o*="@md"], [c6o~=grid][c6o*="@lg"], [c6o~=grid][c6o*="@xl"] {
  grid-template-columns: 12fr;
}

[c6o~="12@sm"], [c6o~="12@md"], [c6o~="12@lg"], [c6o~="12@xl"], [c6o~="11@sm"], [c6o~="11@md"], [c6o~="11@lg"], [c6o~="11@xl"], [c6o~="10@sm"], [c6o~="10@md"], [c6o~="10@lg"], [c6o~="10@xl"], [c6o~="9@sm"], [c6o~="9@md"], [c6o~="9@lg"], [c6o~="9@xl"], [c6o~="8@sm"], [c6o~="8@md"], [c6o~="8@lg"], [c6o~="8@xl"], [c6o~="7@sm"], [c6o~="7@md"], [c6o~="7@lg"], [c6o~="7@xl"], [c6o~="6@sm"], [c6o~="6@md"], [c6o~="6@lg"], [c6o~="6@xl"], [c6o~="5@sm"], [c6o~="5@md"], [c6o~="5@lg"], [c6o~="5@xl"], [c6o~="4@sm"], [c6o~="4@md"], [c6o~="4@lg"], [c6o~="4@xl"], [c6o~="3@sm"], [c6o~="3@md"], [c6o~="3@lg"], [c6o~="3@xl"], [c6o~="2@sm"], [c6o~="2@md"], [c6o~="2@lg"], [c6o~="2@xl"], [c6o~="1@sm"], [c6o~="1@md"], [c6o~="1@lg"], [c6o~="1@xl"] {
  grid-column: span 12;
}

[c6o~=grid][c6o~="1"] {
  grid-template-columns: repeat(12, 1fr);
}

[c6o~="1"] {
  grid-column: span 1/span 1;
}

[c6o~=grid][c6o~="2"] {
  grid-template-columns: repeat(6, 1fr);
}

[c6o~="2"] {
  grid-column: span 2/span 2;
}

[c6o~=grid][c6o~="3"] {
  grid-template-columns: repeat(4, 1fr);
}

[c6o~="3"] {
  grid-column: span 3/span 3;
}

[c6o~=grid][c6o~="4"] {
  grid-template-columns: repeat(3, 1fr);
}

[c6o~="4"] {
  grid-column: span 4/span 4;
}

[c6o~=grid][c6o~="5"] {
  grid-template-columns: repeat(2.4, 1fr);
}

[c6o~="5"] {
  grid-column: span 5/span 5;
}

[c6o~=grid][c6o~="6"] {
  grid-template-columns: repeat(2, 1fr);
}

[c6o~="6"] {
  grid-column: span 6/span 6;
}

[c6o~=grid][c6o~="7"] {
  grid-template-columns: repeat(1.7142857143, 1fr);
}

[c6o~="7"] {
  grid-column: span 7/span 7;
}

[c6o~=grid][c6o~="8"] {
  grid-template-columns: repeat(1.5, 1fr);
}

[c6o~="8"] {
  grid-column: span 8/span 8;
}

[c6o~=grid][c6o~="9"] {
  grid-template-columns: repeat(1.3333333333, 1fr);
}

[c6o~="9"] {
  grid-column: span 9/span 9;
}

[c6o~=grid][c6o~="10"] {
  grid-template-columns: repeat(1.2, 1fr);
}

[c6o~="10"] {
  grid-column: span 10/span 10;
}

[c6o~=grid][c6o~="11"] {
  grid-template-columns: repeat(1.0909090909, 1fr);
}

[c6o~="11"] {
  grid-column: span 11/span 11;
}

[c6o~=grid][c6o~="12"] {
  grid-template-columns: repeat(1, 1fr);
}

[c6o~="12"] {
  grid-column: span 12/span 12;
}

[c6o~=offset-1] {
  grid-column-start: 1;
}

[c6o~=offset-2] {
  grid-column-start: 2;
}

[c6o~=offset-3] {
  grid-column-start: 3;
}

[c6o~=offset-4] {
  grid-column-start: 4;
}

[c6o~=offset-5] {
  grid-column-start: 5;
}

[c6o~=offset-6] {
  grid-column-start: 6;
}

[c6o~=offset-7] {
  grid-column-start: 7;
}

[c6o~=offset-8] {
  grid-column-start: 8;
}

[c6o~=offset-9] {
  grid-column-start: 9;
}

[c6o~=offset-10] {
  grid-column-start: 10;
}

[c6o~=offset-11] {
  grid-column-start: 11;
}

[c6o~=offset-12] {
  grid-column-start: 12;
}

@media (min-width: 480px) {
  [c6o~=grid][c6o~="1@sm"] {
    grid-template-columns: repeat(12, 1fr);
  }

  [c6o~="1@sm"] {
    grid-column: span 1/span 1;
  }

  [c6o~=grid][c6o~="2@sm"] {
    grid-template-columns: repeat(6, 1fr);
  }

  [c6o~="2@sm"] {
    grid-column: span 2/span 2;
  }

  [c6o~=grid][c6o~="3@sm"] {
    grid-template-columns: repeat(4, 1fr);
  }

  [c6o~="3@sm"] {
    grid-column: span 3/span 3;
  }

  [c6o~=grid][c6o~="4@sm"] {
    grid-template-columns: repeat(3, 1fr);
  }

  [c6o~="4@sm"] {
    grid-column: span 4/span 4;
  }

  [c6o~=grid][c6o~="5@sm"] {
    grid-template-columns: repeat(2.4, 1fr);
  }

  [c6o~="5@sm"] {
    grid-column: span 5/span 5;
  }

  [c6o~=grid][c6o~="6@sm"] {
    grid-template-columns: repeat(2, 1fr);
  }

  [c6o~="6@sm"] {
    grid-column: span 6/span 6;
  }

  [c6o~=grid][c6o~="7@sm"] {
    grid-template-columns: repeat(1.7142857143, 1fr);
  }

  [c6o~="7@sm"] {
    grid-column: span 7/span 7;
  }

  [c6o~=grid][c6o~="8@sm"] {
    grid-template-columns: repeat(1.5, 1fr);
  }

  [c6o~="8@sm"] {
    grid-column: span 8/span 8;
  }

  [c6o~=grid][c6o~="9@sm"] {
    grid-template-columns: repeat(1.3333333333, 1fr);
  }

  [c6o~="9@sm"] {
    grid-column: span 9/span 9;
  }

  [c6o~=grid][c6o~="10@sm"] {
    grid-template-columns: repeat(1.2, 1fr);
  }

  [c6o~="10@sm"] {
    grid-column: span 10/span 10;
  }

  [c6o~=grid][c6o~="11@sm"] {
    grid-template-columns: repeat(1.0909090909, 1fr);
  }

  [c6o~="11@sm"] {
    grid-column: span 11/span 11;
  }

  [c6o~=grid][c6o~="12@sm"] {
    grid-template-columns: repeat(1, 1fr);
  }

  [c6o~="12@sm"] {
    grid-column: span 12/span 12;
  }

  [c6o~="offset-1@sm"] {
    grid-column-start: 1;
  }

  [c6o~="offset-2@sm"] {
    grid-column-start: 2;
  }

  [c6o~="offset-3@sm"] {
    grid-column-start: 3;
  }

  [c6o~="offset-4@sm"] {
    grid-column-start: 4;
  }

  [c6o~="offset-5@sm"] {
    grid-column-start: 5;
  }

  [c6o~="offset-6@sm"] {
    grid-column-start: 6;
  }

  [c6o~="offset-7@sm"] {
    grid-column-start: 7;
  }

  [c6o~="offset-8@sm"] {
    grid-column-start: 8;
  }

  [c6o~="offset-9@sm"] {
    grid-column-start: 9;
  }

  [c6o~="offset-10@sm"] {
    grid-column-start: 10;
  }

  [c6o~="offset-11@sm"] {
    grid-column-start: 11;
  }

  [c6o~="offset-12@sm"] {
    grid-column-start: 12;
  }

  [c6o~="hide@sm"] {
    display: none !important;
  }

  [c6o~="show@sm"] {
    display: initial !important;
  }

  [c6o~="first@sm"] {
    order: -1;
  }

  [c6o~="last@sm"] {
    order: 12;
  }
}
@media (min-width: 720px) {
  [c6o~=grid][c6o~="1@md"] {
    grid-template-columns: repeat(12, 1fr);
  }

  [c6o~="1@md"] {
    grid-column: span 1/span 1;
  }

  [c6o~=grid][c6o~="2@md"] {
    grid-template-columns: repeat(6, 1fr);
  }

  [c6o~="2@md"] {
    grid-column: span 2/span 2;
  }

  [c6o~=grid][c6o~="3@md"] {
    grid-template-columns: repeat(4, 1fr);
  }

  [c6o~="3@md"] {
    grid-column: span 3/span 3;
  }

  [c6o~=grid][c6o~="4@md"] {
    grid-template-columns: repeat(3, 1fr);
  }

  [c6o~="4@md"] {
    grid-column: span 4/span 4;
  }

  [c6o~=grid][c6o~="5@md"] {
    grid-template-columns: repeat(2.4, 1fr);
  }

  [c6o~="5@md"] {
    grid-column: span 5/span 5;
  }

  [c6o~=grid][c6o~="6@md"] {
    grid-template-columns: repeat(2, 1fr);
  }

  [c6o~="6@md"] {
    grid-column: span 6/span 6;
  }

  [c6o~=grid][c6o~="7@md"] {
    grid-template-columns: repeat(1.7142857143, 1fr);
  }

  [c6o~="7@md"] {
    grid-column: span 7/span 7;
  }

  [c6o~=grid][c6o~="8@md"] {
    grid-template-columns: repeat(1.5, 1fr);
  }

  [c6o~="8@md"] {
    grid-column: span 8/span 8;
  }

  [c6o~=grid][c6o~="9@md"] {
    grid-template-columns: repeat(1.3333333333, 1fr);
  }

  [c6o~="9@md"] {
    grid-column: span 9/span 9;
  }

  [c6o~=grid][c6o~="10@md"] {
    grid-template-columns: repeat(1.2, 1fr);
  }

  [c6o~="10@md"] {
    grid-column: span 10/span 10;
  }

  [c6o~=grid][c6o~="11@md"] {
    grid-template-columns: repeat(1.0909090909, 1fr);
  }

  [c6o~="11@md"] {
    grid-column: span 11/span 11;
  }

  [c6o~=grid][c6o~="12@md"] {
    grid-template-columns: repeat(1, 1fr);
  }

  [c6o~="12@md"] {
    grid-column: span 12/span 12;
  }

  [c6o~="offset-1@md"] {
    grid-column-start: 1;
  }

  [c6o~="offset-2@md"] {
    grid-column-start: 2;
  }

  [c6o~="offset-3@md"] {
    grid-column-start: 3;
  }

  [c6o~="offset-4@md"] {
    grid-column-start: 4;
  }

  [c6o~="offset-5@md"] {
    grid-column-start: 5;
  }

  [c6o~="offset-6@md"] {
    grid-column-start: 6;
  }

  [c6o~="offset-7@md"] {
    grid-column-start: 7;
  }

  [c6o~="offset-8@md"] {
    grid-column-start: 8;
  }

  [c6o~="offset-9@md"] {
    grid-column-start: 9;
  }

  [c6o~="offset-10@md"] {
    grid-column-start: 10;
  }

  [c6o~="offset-11@md"] {
    grid-column-start: 11;
  }

  [c6o~="offset-12@md"] {
    grid-column-start: 12;
  }

  [c6o~="hide@md"] {
    display: none !important;
  }

  [c6o~="show@md"] {
    display: initial !important;
  }

  [c6o~="first@md"] {
    order: -1;
  }

  [c6o~="last@md"] {
    order: 12;
  }
}
@media (min-width: 960px) {
  [c6o~=grid][c6o~="1@lg"] {
    grid-template-columns: repeat(12, 1fr);
  }

  [c6o~="1@lg"] {
    grid-column: span 1/span 1;
  }

  [c6o~=grid][c6o~="2@lg"] {
    grid-template-columns: repeat(6, 1fr);
  }

  [c6o~="2@lg"] {
    grid-column: span 2/span 2;
  }

  [c6o~=grid][c6o~="3@lg"] {
    grid-template-columns: repeat(4, 1fr);
  }

  [c6o~="3@lg"] {
    grid-column: span 3/span 3;
  }

  [c6o~=grid][c6o~="4@lg"] {
    grid-template-columns: repeat(3, 1fr);
  }

  [c6o~="4@lg"] {
    grid-column: span 4/span 4;
  }

  [c6o~=grid][c6o~="5@lg"] {
    grid-template-columns: repeat(2.4, 1fr);
  }

  [c6o~="5@lg"] {
    grid-column: span 5/span 5;
  }

  [c6o~=grid][c6o~="6@lg"] {
    grid-template-columns: repeat(2, 1fr);
  }

  [c6o~="6@lg"] {
    grid-column: span 6/span 6;
  }

  [c6o~=grid][c6o~="7@lg"] {
    grid-template-columns: repeat(1.7142857143, 1fr);
  }

  [c6o~="7@lg"] {
    grid-column: span 7/span 7;
  }

  [c6o~=grid][c6o~="8@lg"] {
    grid-template-columns: repeat(1.5, 1fr);
  }

  [c6o~="8@lg"] {
    grid-column: span 8/span 8;
  }

  [c6o~=grid][c6o~="9@lg"] {
    grid-template-columns: repeat(1.3333333333, 1fr);
  }

  [c6o~="9@lg"] {
    grid-column: span 9/span 9;
  }

  [c6o~=grid][c6o~="10@lg"] {
    grid-template-columns: repeat(1.2, 1fr);
  }

  [c6o~="10@lg"] {
    grid-column: span 10/span 10;
  }

  [c6o~=grid][c6o~="11@lg"] {
    grid-template-columns: repeat(1.0909090909, 1fr);
  }

  [c6o~="11@lg"] {
    grid-column: span 11/span 11;
  }

  [c6o~=grid][c6o~="12@lg"] {
    grid-template-columns: repeat(1, 1fr);
  }

  [c6o~="12@lg"] {
    grid-column: span 12/span 12;
  }

  [c6o~="offset-1@lg"] {
    grid-column-start: 1;
  }

  [c6o~="offset-2@lg"] {
    grid-column-start: 2;
  }

  [c6o~="offset-3@lg"] {
    grid-column-start: 3;
  }

  [c6o~="offset-4@lg"] {
    grid-column-start: 4;
  }

  [c6o~="offset-5@lg"] {
    grid-column-start: 5;
  }

  [c6o~="offset-6@lg"] {
    grid-column-start: 6;
  }

  [c6o~="offset-7@lg"] {
    grid-column-start: 7;
  }

  [c6o~="offset-8@lg"] {
    grid-column-start: 8;
  }

  [c6o~="offset-9@lg"] {
    grid-column-start: 9;
  }

  [c6o~="offset-10@lg"] {
    grid-column-start: 10;
  }

  [c6o~="offset-11@lg"] {
    grid-column-start: 11;
  }

  [c6o~="offset-12@lg"] {
    grid-column-start: 12;
  }

  [c6o~="hide@lg"] {
    display: none !important;
  }

  [c6o~="show@lg"] {
    display: initial !important;
  }

  [c6o~="first@lg"] {
    order: -1;
  }

  [c6o~="last@lg"] {
    order: 12;
  }
}
@media (min-width: 1440px) {
  [c6o~=grid][c6o~="1@xl"] {
    grid-template-columns: repeat(12, 1fr);
  }

  [c6o~="1@xl"] {
    grid-column: span 1/span 1;
  }

  [c6o~=grid][c6o~="2@xl"] {
    grid-template-columns: repeat(6, 1fr);
  }

  [c6o~="2@xl"] {
    grid-column: span 2/span 2;
  }

  [c6o~=grid][c6o~="3@xl"] {
    grid-template-columns: repeat(4, 1fr);
  }

  [c6o~="3@xl"] {
    grid-column: span 3/span 3;
  }

  [c6o~=grid][c6o~="4@xl"] {
    grid-template-columns: repeat(3, 1fr);
  }

  [c6o~="4@xl"] {
    grid-column: span 4/span 4;
  }

  [c6o~=grid][c6o~="5@xl"] {
    grid-template-columns: repeat(2.4, 1fr);
  }

  [c6o~="5@xl"] {
    grid-column: span 5/span 5;
  }

  [c6o~=grid][c6o~="6@xl"] {
    grid-template-columns: repeat(2, 1fr);
  }

  [c6o~="6@xl"] {
    grid-column: span 6/span 6;
  }

  [c6o~=grid][c6o~="7@xl"] {
    grid-template-columns: repeat(1.7142857143, 1fr);
  }

  [c6o~="7@xl"] {
    grid-column: span 7/span 7;
  }

  [c6o~=grid][c6o~="8@xl"] {
    grid-template-columns: repeat(1.5, 1fr);
  }

  [c6o~="8@xl"] {
    grid-column: span 8/span 8;
  }

  [c6o~=grid][c6o~="9@xl"] {
    grid-template-columns: repeat(1.3333333333, 1fr);
  }

  [c6o~="9@xl"] {
    grid-column: span 9/span 9;
  }

  [c6o~=grid][c6o~="10@xl"] {
    grid-template-columns: repeat(1.2, 1fr);
  }

  [c6o~="10@xl"] {
    grid-column: span 10/span 10;
  }

  [c6o~=grid][c6o~="11@xl"] {
    grid-template-columns: repeat(1.0909090909, 1fr);
  }

  [c6o~="11@xl"] {
    grid-column: span 11/span 11;
  }

  [c6o~=grid][c6o~="12@xl"] {
    grid-template-columns: repeat(1, 1fr);
  }

  [c6o~="12@xl"] {
    grid-column: span 12/span 12;
  }

  [c6o~="offset-1@xl"] {
    grid-column-start: 1;
  }

  [c6o~="offset-2@xl"] {
    grid-column-start: 2;
  }

  [c6o~="offset-3@xl"] {
    grid-column-start: 3;
  }

  [c6o~="offset-4@xl"] {
    grid-column-start: 4;
  }

  [c6o~="offset-5@xl"] {
    grid-column-start: 5;
  }

  [c6o~="offset-6@xl"] {
    grid-column-start: 6;
  }

  [c6o~="offset-7@xl"] {
    grid-column-start: 7;
  }

  [c6o~="offset-8@xl"] {
    grid-column-start: 8;
  }

  [c6o~="offset-9@xl"] {
    grid-column-start: 9;
  }

  [c6o~="offset-10@xl"] {
    grid-column-start: 10;
  }

  [c6o~="offset-11@xl"] {
    grid-column-start: 11;
  }

  [c6o~="offset-12@xl"] {
    grid-column-start: 12;
  }

  [c6o~="hide@xl"] {
    display: none !important;
  }

  [c6o~="show@xl"] {
    display: initial !important;
  }

  [c6o~="first@xl"] {
    order: -1;
  }

  [c6o~="last@xl"] {
    order: 12;
  }
}
[c6o~=flex] {
  display: flex;
  flex-wrap: wrap;
}
[c6o~=flex][c6o~=column] {
  flex-direction: column;
}
[c6o~=flex][c6o~=nowrap] {
  flex-wrap: nowrap;
}

[c6o~=fill] {
  flex: 1 1 0%;
  flex-basis: 0%;
}

[c6o~=fit] {
  flex-basis: auto;
}

[c6o~=align-start] {
  align-items: flex-start;
}

[c6o~=align-center] {
  align-items: center;
}

[c6o~=align-end] {
  align-items: flex-end;
}

[c6o~=justify-start] {
  justify-content: flex-start;
}

[c6o~=justify-between] {
  justify-content: space-between;
}

[c6o~=justify-center] {
  justify-content: center;
}

[c6o~=justify-end] {
  justify-content: flex-end;
}

[c6o~=float-center] {
  margin-left: auto;
  margin-right: auto;
  display: block;
  float: none;
}

[c6o~=float-left] {
  float: left;
}

[c6o~=float-right] {
  float: right;
}

[c6o~=clear-fix]::after {
  content: "";
  display: table;
  clear: both;
}

[c6o~=text-left] {
  text-align: left !important;
}

[c6o~=text-right] {
  text-align: right !important;
}

[c6o~=text-center] {
  text-align: center !important;
}

[c6o~="1--max"] {
  max-width: 120px !important;
}

[c6o~="2--max"] {
  max-width: 240px !important;
}

[c6o~="3--max"] {
  max-width: 360px !important;
}

[c6o~="4--max"] {
  max-width: 480px !important;
}

[c6o~="5--max"] {
  max-width: 600px !important;
}

[c6o~="6--max"] {
  max-width: 720px !important;
}

[c6o~="7--max"] {
  max-width: 840px !important;
}

[c6o~="8--max"] {
  max-width: 960px !important;
}

[c6o~="9--max"] {
  max-width: 1080px !important;
}

[c6o~="10--max"] {
  max-width: 1200px !important;
}

[c6o~="11--max"] {
  max-width: 1320px !important;
}

[c6o~="12--max"] {
  max-width: 1440px !important;
}

[c6o~=full-width] {
  width: 100%;
}

@media (max-width: 480px) {
  [c6o~="full-width-until@sm"] {
    width: 100% !important;
    max-width: 100% !important;
  }
}
@media (max-width: 720px) {
  [c6o~="full-width-until@md"] {
    width: 100% !important;
    max-width: 100% !important;
  }
}
@media (max-width: 960px) {
  [c6o~="full-width-until@lg"] {
    width: 100% !important;
    max-width: 100% !important;
  }
}
@media (max-width: 1440px) {
  [c6o~="full-width-until@xl"] {
    width: 100% !important;
    max-width: 100% !important;
  }
}
[c6o~=margin--xs] {
  margin: 5px !important;
}

[c6o~=margin-top--xs] {
  margin-top: 5px !important;
}

[c6o~=margin-bottom--xs] {
  margin-bottom: 5px !important;
}

[c6o~=margin-right--xs] {
  margin-right: 5px !important;
}

[c6o~=margin-left--xs] {
  margin-left: 5px !important;
}

[c6o~=padding--xs] {
  padding: 5px !important;
}

[c6o~=padding-top--xs] {
  padding-top: 5px !important;
}

[c6o~=padding-bottom--xs] {
  padding-bottom: 5px !important;
}

[c6o~=padding-right--xs] {
  padding-right: 5px !important;
}

[c6o~=padding-left--xs] {
  padding-left: 5px !important;
}

[c6o~=margin--sm] {
  margin: 10px !important;
}

[c6o~=margin-top--sm] {
  margin-top: 10px !important;
}

[c6o~=margin-bottom--sm] {
  margin-bottom: 10px !important;
}

[c6o~=margin-right--sm] {
  margin-right: 10px !important;
}

[c6o~=margin-left--sm] {
  margin-left: 10px !important;
}

[c6o~=padding--sm] {
  padding: 10px !important;
}

[c6o~=padding-top--sm] {
  padding-top: 10px !important;
}

[c6o~=padding-bottom--sm] {
  padding-bottom: 10px !important;
}

[c6o~=padding-right--sm] {
  padding-right: 10px !important;
}

[c6o~=padding-left--sm] {
  padding-left: 10px !important;
}

[c6o~=margin] {
  margin: 15px !important;
}

[c6o~=margin-top] {
  margin-top: 15px !important;
}

[c6o~=margin-bottom] {
  margin-bottom: 15px !important;
}

[c6o~=margin-right] {
  margin-right: 15px !important;
}

[c6o~=margin-left] {
  margin-left: 15px !important;
}

[c6o~=padding] {
  padding: 15px !important;
}

[c6o~=padding-top] {
  padding-top: 15px !important;
}

[c6o~=padding-bottom] {
  padding-bottom: 15px !important;
}

[c6o~=padding-right] {
  padding-right: 15px !important;
}

[c6o~=padding-left] {
  padding-left: 15px !important;
}

[c6o~=margin--lg] {
  margin: 20px !important;
}

[c6o~=margin-top--lg] {
  margin-top: 20px !important;
}

[c6o~=margin-bottom--lg] {
  margin-bottom: 20px !important;
}

[c6o~=margin-right--lg] {
  margin-right: 20px !important;
}

[c6o~=margin-left--lg] {
  margin-left: 20px !important;
}

[c6o~=padding--lg] {
  padding: 20px !important;
}

[c6o~=padding-top--lg] {
  padding-top: 20px !important;
}

[c6o~=padding-bottom--lg] {
  padding-bottom: 20px !important;
}

[c6o~=padding-right--lg] {
  padding-right: 20px !important;
}

[c6o~=padding-left--lg] {
  padding-left: 20px !important;
}

[c6o~=margin--none] {
  margin: 0 !important;
}

[c6o~=margin-top--none] {
  margin-top: 0 !important;
}

[c6o~=margin-bottom--none] {
  margin-bottom: 0 !important;
}

[c6o~=margin-right--none] {
  margin-right: 0 !important;
}

[c6o~=margin-left--none] {
  margin-left: 0 !important;
}

[c6o~=padding--none] {
  padding: 0 !important;
}

[c6o~=padding-top--none] {
  padding-top: 0 !important;
}

[c6o~=padding-bottom--none] {
  padding-bottom: 0 !important;
}

[c6o~=padding-right--none] {
  padding-right: 0 !important;
}

[c6o~=padding-left--none] {
  padding-left: 0 !important;
}
`