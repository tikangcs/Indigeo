module.exports = {
  container: {
    flex: 1,
    backgroundColor: "rgba(176,196,222,0.3)",
  },
  header: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  profilePhotoContainer: {
    flex: 2,
    alignItems: "center",
  },
  profilePhoto: {
    height: "60%",
    width: "60%",
    borderWidth: 1,
    borderRadius: 50,
    resizeMode: "stretch",
  },
  usernameContainer: {
    flex: 3,
    height: "25%",
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
  },
  favoritesHeadingText: {
    fontSize: 30,
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
  logout: {
    flex: 0.5,
    margin: "3%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "dodgerblue",
  },
  logoutText: {
    fontSize: 30,
  },
};
