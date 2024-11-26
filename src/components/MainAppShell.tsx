
import {
  AppShell,
  Burger,
  ColorScheme,
  ColorSchemeProvider,
  Header,
  MantineProvider,
  MediaQuery,
  Navbar,
  Text,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CgCalculator } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { BsBarChartLine, BsPlusCircle } from "react-icons/bs";
import NavigationLink from "./NavigationLink";
import DarkLightThemeButton from "./DarkLightThemeButton";
import HomePage from "../pages/HomePage";
import AddBudgetPage from "../pages/AddBudgetPage";
import AddExpensePage from "../pages/AddExpensePage";
import { useLocalStorage } from "@mantine/hooks";
import DisplayCategoriesPage from "../pages/DisplayCategoriesPage";
import Login from "./Login";
import { GoogleOAuthProvider } from '@react-oauth/google';
import LandingPage from "../pages/LandingPage";

const CLIENT_ID = '303154332757-r49v5dq3iqs860uhq2rhub3d7muaa78q.apps.googleusercontent.com'; // Replace with your Google Client ID

const MainAppShell = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: "theme",
    defaultValue: "dark",
  });
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));

  return (
    <GoogleOAuthProvider clientId={CLIENT_ID}>
      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >

        <MantineProvider
          theme={{ colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <BrowserRouter>
            <AppShell
              styles={(theme) => ({
                main: {
                  backgroundColor:
                    theme.colorScheme === "dark"
                      ? theme.colors.dark[8]
                      : theme.colors.gray[0],
                },
              })}
              navbarOffsetBreakpoint="sm"
              asideOffsetBreakpoint="sm"
              navbar={
                <Navbar
                  p="md"
                  hiddenBreakpoint="sm"
                  hidden={!opened}
                  width={{ sm: 250, lg: 350 }}
                >
                  <NavigationLink
                    label="Home"
                    icon={<AiOutlineHome />}
                    link="/"
                  />
                  <NavigationLink
                    label="Add an Expense"
                    icon={<BsPlusCircle />}
                    link="/newExpense"
                  />
                  <NavigationLink
                    label="Add / Update Your Budget"
                    icon={<span>₹</span>}
                    link="/newBudget"
                  />
                  <NavigationLink
                    label="View Spending in Categories"
                    icon={<BsBarChartLine />}
                    link="/categories"
                  />
                </Navbar>
              }
              header={
                <Header
                  height={{ base: 50, md: 70 }}
                  p="md"
                  sx={(theme) => ({
                    color:
                      theme.colorScheme === "dark"
                        ? theme.colors.dark[1]
                        : theme.colors.gray[9],
                    fontSize: "25px",
                  })}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      height: "100%",
                    }}
                  >
                    <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                      <Burger
                        opened={opened}
                        onClick={() => setOpened((o) => !o)}
                        size="sm"
                        color={theme.colors.gray[6]}
                        mr="xl"
                      />
                    </MediaQuery>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        height: "100%",
                      }}
                    >
                      <CgCalculator />
                      <Text ml={10}>BETA</Text>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px' }}>
                      <DarkLightThemeButton />
                      <Login />
                    </div>
                  </div>
                </Header>
              }
            >
              {/* Handle Routing */}
              <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/newExpense" element={<AddExpensePage />} />
                <Route path="/newBudget" element={<AddBudgetPage />} />
                <Route path="/categories" element={<DisplayCategoriesPage />} />
              </Routes>
            </AppShell>
          </BrowserRouter>
        </MantineProvider>
      </ColorSchemeProvider>
    </GoogleOAuthProvider>
  );
};

export default MainAppShell;
