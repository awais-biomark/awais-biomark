import { makeStyles } from "@material-ui/core";
export const loginPageStyles = makeStyles(() => ({
  heading10:
  {
    fontFamily: ["Mukta"].join(",")
  },
  headings:
  {
    fontFamily: ["Mulish"].join(","),
    left: 'calc(-50 % + 15px)',
    right: 'calc(50 % + 15px)',
  },
  heading:
  {
    fontFamily: ["Sans"].join(","),
  },
  headfamily:
  {
    fontFamily: ["Over the Rainbow"].join(","),
  },
  boxShadowSet:
  {
    boxshadow: '0px 0px 8px 1px rgba(0, 0, 0, 0.2)',
  },
  stepper_check: {
    width: "70%",
    height: "55px",
    fontSize: '20px !important',
    "&.css-qivjh0-MuiStepLabel-label": {},
  },
  notFoundSubHeading: {
    "&.MuiStepLabel-label-root": {
      fontSize: "30px !important",
      fontWeight: "700 !important",
    },
    boxDisplayNone: {
      display: "none"
    }
  },
}));
