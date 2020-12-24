import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import { useSelector } from "react-redux";
import { RootState } from "../../store";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  tab: {
    backgroundColor: "#ffffff",
    color: "gray",
  },
});
interface InputItem {
  label: any;
  component: any;
  icon: any;
  private?: string[];
}
interface Props {
  input: InputItem[];
}
export const TabsRender = (props: Props) => {
  const classes = useStyles();
  const [tabValue, setTabValue] = useState([] as InputItem[]);
  const { input } = props;
  const [value, setValue] = React.useState(0);
  const user = useSelector((state: RootState) => state.UserReducer.account);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    setTabValue(
      input.filter(
        (i) => !i.private || i.private.find((e) => e === user?.role?.code)
      )
    );
  }, [user]);
  return (
    <div className={classes.root}>
      <AppBar className={classes.tab} position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          {tabValue.map((item, index) => (
            <Tab label={item.label} {...a11yProps(index)} />
          ))}
        </Tabs>
      </AppBar>
      {tabValue.map((item, index) => (
        <TabPanel value={value} index={index}>
          {item.component}
        </TabPanel>
      ))}
    </div>
  );
};

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
