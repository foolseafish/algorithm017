/*
 * @lc app=leetcode.cn id=874 lang=javascript
 *
 * [874] 模拟行走机器人
 */

// @lc code=start
/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
//范围判断
//时间O(n*m) n command长度，m障碍物长度
//空间O(1)
var robotSim = function(commands, obstacles) {
    let direction = [0,1,0,-1];
    let dyoffset = 1;
    let dxoffset = 0;
    let x = 0;
    let y = 0;
    let ans = 0;
    commands.forEach(command => {
        if(command >= 0) {
            // 想要移动的位置
            let wantPositionX = x + direction[dxoffset] * command;
            let wantPositionY = y + direction[dyoffset] * command;
            // 找出移动位置上最近的障碍
            let closestObStacle = obstacles.reduce((minObstacle, obstacle) => {
                if(direction[dxoffset] > 0 && obstacle[1] === y  //X轴正方向移动 
                && obstacle[0] > x && obstacle[0] <= wantPositionX) { // 且障碍在移动范围中间
                    
                    return minObstacle && minObstacle[0] < obstacles[0]? minObstacle: obstacle;
                } else if(direction[dxoffset] < 0 && obstacle[1] === y //X轴负方向移动 
                && obstacle[0] < x && obstacle[0] >= wantPositionX){
                    
                    return minObstacle && minObstacle[0] > obstacles[0]? minObstacle: obstacle;
                } if(direction[dyoffset] > 0 && obstacle[0] === x //y轴正方向移动 
                && obstacle[1] > y && obstacle[1] <= wantPositionY) {
                    return minObstacle && minObstacle[1] < obstacles[1]? minObstacle: obstacle;
                } else if(direction[dyoffset] < 0 && obstacle[0] === x //y轴负方向移动 
                && obstacle[1] < y && obstacle[1] >= wantPositionY){
                    return minObstacle && minObstacle[1] > obstacles[1]? minObstacle: obstacle;
                } 
                return minObstacle;
            }, null);
            if(closestObStacle){
                //有障碍
                x = closestObStacle[0] - 1 * direction[dxoffset]
                y = closestObStacle[1] - 1 * direction[dyoffset]
            } else {
                //无障碍
                x = wantPositionX;
                y = wantPositionY;
            }
            ans = Math.max(ans, x**2 + y**2);
        } else if (command === -1){
            dxoffset = (dxoffset + 1) % 4;
            dyoffset = (dyoffset + 1) % 4;
        } else if (command === -2){
            dxoffset = (dxoffset + 3) % 4;
            dyoffset = (dyoffset + 3) % 4;
        }
    });
    return ans;
};
// hash优化
// 时间不好给 具体应该算n（command 长度） + k（查询次数），
// 这个我觉得在障碍物多且移动距离不远的情况下会优于上面，相反则上面的更优。
// O(k) hashset长度
// hash优化
var robotSim = function(commands, obstacles) {
    let direction = [0,1,0,-1];
    let dyoffset = 1;
    let dxoffset = 0;
    let x = 0;
    let y = 0;
    let ans = 0;
    let obstacleSet = new Set();
    obstacles.forEach(obstacle => {
        obstacleSet.add(getHashCode(...obstacle));
    })

    commands.forEach(command => {
        if(command >= 0) {
            // 想要移动的位置
            for(let i = 1; i <= command; i++) {
                let wantPositionX = x + direction[dxoffset];
                let wantPositionY = y + direction[dyoffset];
                // 找出移动位置上最近的障碍
               if(obstacleSet.has(getHashCode(wantPositionX,wantPositionY))) break; // 找到了就别找了
               x = wantPositionX;
               y = wantPositionY;
            }
            ans = Math.max(ans, x**2 + y**2);
        } else if (command === -1){
            dxoffset = (dxoffset + 1) % 4;
            dyoffset = (dyoffset + 1) % 4;
        } else if (command === -2){
            dxoffset = (dxoffset + 3) % 4;
            dyoffset = (dyoffset + 3) % 4;
        }
    });
    return ans;
};

var getHashCode = (x,y) => {    
    return x + '_' + y;
}
// @lc code=end

