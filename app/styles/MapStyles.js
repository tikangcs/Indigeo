import { Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = height / 5.5;
const CARD_WIDTH = CARD_HEIGHT - 10;

module.exports = {
  container: {
    flex: 1,
    backgroundColor: "rgba(176,196,222,0.4)",
  },
  map: {
    flex: 8,
  },
  headerButtons: {
    alignItems: "flex-end",
    marginRight: 10,
    marginTop: 10,
  },
  results: {
    flex: 4,
    borderTopWidth: 2,
    borderBottomWidth: 2,
    backgroundColor: "rgba(139,69,19,0.5)",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    paddingLeft: "3%",
    color: "honeydew",
    textShadowColor: "black",
    textShadowRadius: 2,
    textShadowOffset: { width: 2, height: 2 },
  },
  titleContainer: {
    flex: 2,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  viewButtonsContainer: {
    flex: 2,
    marginTop: "3%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  viewButtons: {
    flex: 2,
    borderWidth: 1,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: "2%",
    height: "100%",
    backgroundColor: "rgba(234,102,113, 0.7)",
  },
  buttonText: {
    fontSize: 30,
  },
  uploadContainer: {
    justifyContent: "center",
  },
  upload: {
    flex: 1.45,
    resizeMode: "contain",
    borderRadius: 50,
    borderWidth: 2,
    backgroundColor: "rgba(128,128,128, 0.7)",
  },
  scrollViewContainer: {
    flex: 9,
  },
  scrollView: {
    alignItems: "center",
  },
  card: {
    padding: 6,
    backgroundColor: "#FFF",
    marginHorizontal: 5,
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: "peachpuff",
  },
  cardImage: {
    flex: 2.5,
    width: "100%",
    height: "100%",
    alignSelf: "center",
    borderRadius: 5,
    borderWidth: 1,
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 20,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 16,
    color: "#444",
  },
  searching: {
    flex: 1,
    left: 10,
    alignItems: "center",
  },
  searchingText: {
    fontSize: 40,
    color: "honeydew",
    textShadowColor: "black",
    textShadowRadius: 2,
    textShadowOffset: { width: 2, height: 2 },
  },
  marker: {
    fontSize: 16,
    color: "honeydew",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "rgba(130,4,150, 0.5)",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
};
