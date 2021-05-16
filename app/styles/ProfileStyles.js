module.exports = {
  container: {
    flex: 1,
    backgroundColor: "rgba(176,196,222,0.4)",
  },
  header: {
    flex: 1.5,
    marginTop: "2%",
    flexDirection: "row",
    justifyContent: "center",
  },
  profilePhotoContainer: {
    flex: 1.5,
    justifyContent: "center",
    alignItems: "center",
  },
  profilePhoto: {
    borderWidth: 1,
    borderRadius: 10,
    width: 150,
    height: 150,
  },
  usernameContainer: {
    flex: 2,
    justifyContent: "center",
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  usernameText: {
    fontSize: 44,
    fontWeight: "bold",
    textShadowColor: "dodgerblue",
    textShadowRadius: 2,
    textShadowOffset: { width: 1, height: 1 },
  },
  subtext: {
    fontSize: 20,
  },
  favoritesContainer: {
    flex: 4,
    borderWidth: 1,
    borderRadius: 5,
    margin: "2% 2%",
    padding: "0 3%",
    backgroundColor: "tan",
  },
  favoritesHeadingContainer: {
    marginVertical: "1%",
    alignItems: "center",
  },
  favoritesHeadingText: {
    fontSize: 34,
    fontWeight: "bold",
    textShadowColor: "honeydew",
    textShadowRadius: 2,
    textShadowOffset: { width: 1, height: 1 },
  },
  flatList: {},
  unfavorite: {
    position: "absolute",
    right: "5%",
    top: "5%",
  },
  item: {
    margin: "1.5% 2%",
    alignItems: "center",
    borderWidth: 1,
    borderRadius: 5,
    padding: "1%",
    backgroundColor: "peachpuff",
  },
  title: {
    fontSize: 20,
    paddingTop: 3,
    fontWeight: "bold",
  },
  image: {
    width: 110,
    height: 110,
  },
  buttonsContainer: {
    flex: 1,
  },
  continue: {
    flex: 0.5,
    marginHorizontal: "2%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
    borderWidth: 1,
    borderRadius: 5,
  },
  continueText: {
    fontSize: 30,
    color: "white",
  },
  logout: {
    flex: 0.5,
    marginHorizontal: "2%",
    marginVertical: "3%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "firebrick",
    borderWidth: 1,
    borderRadius: 5,
  },
  logoutText: {
    fontSize: 30,
    color: "white",
  },
};
