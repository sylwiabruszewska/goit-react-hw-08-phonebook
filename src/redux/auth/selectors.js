export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUserName = state => state.auth.user.name;

export const selectUserEmail = state => state.auth.user.email;
