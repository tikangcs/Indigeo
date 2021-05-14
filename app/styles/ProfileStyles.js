module.exports = {
  container: {
    flex: 1,
    backgroundColor: "rgba(176,196,222,0.4)",
  },
  header: {
    flex: 1.5,
    marginTop: "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePhotoContainer: {
    flex: 5,
    alignItems: "center",
  },
  profilePhoto: {
    flex: 5,
    borderRadius: 100,
    resizeMode: "contain",
  },
  usernameContainer: {
    flex: 3,
    height: "25%",
    justifyContent: "center",
  },
  usernameText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  favoritesContainer: {
    flex: 4,
    borderWidth: 1,
    margin: "2% 2%",
    alignItems: "center",
    padding: "0 3%",
    backgroundColor: "tan",
  },
  favoritesHeadingText: {
    fontSize: 34,
    fontWeight: "bold",
  },
  flatList: {
    alignItems: "center",
  },
  unfavorite: {
    position: "absolute",
    right: "5%",
    top: "5%",
  },
  item: {
    margin: "1.5% 2%",
    alignItems: "center",
    borderWidth: 1,
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
  },
  continueText: {
    fontSize: 30,
    fontWeight: "bold",
  },
  logout: {
    flex: 0.5,
    marginHorizontal: "2%",
    marginVertical: "3%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "firebrick",
  },
  logoutText: {
    fontSize: 30,
    color: "white",
  },
};
