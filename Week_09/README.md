这周主要学习了高级动态规划和字符串匹配
不同路径 2 的DP方程
dp[i][j] = func(i, j)? 0: dp[i - 1][j] + dp[i][j - 1];
dp[i][0] = 0;
dp[0][j] = 0;
dp[0][1] = 1;

字符串匹配学习了KMP，BM, RK, Sunday算法