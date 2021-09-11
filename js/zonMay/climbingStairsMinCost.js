// Min Cost Climbing Stairs
// https://leetcode.com/problems/min-cost-climbing-stairs/

/*
On a staircase, the i-th step has some non-negative cost cost[i] assigned (0 indexed).

Once you pay the cost, you can either climb one or two steps. You need to find minimum cost to reach the top of the floor, and you can either start from the step with index 0, or the step with index 1.

Example 1:
Input: cost = [10, 15, 20]
Output: 15
Explanation: Cheapest is start on cost[1], pay that cost and go to the top.

Example 2:
Input: cost = [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]
Output: 6
Explanation: Cheapest is start on cost[0], and only step on 1s, skipping cost[3].
*/

export const minCostClimbingStairs = (cost) => {
    if(cost.length < 3){
        return Math.min(cost[0], cost[1]);
    }

    let cost1 = 0;
    let cost2 = 0;

    for(let i = cost.length-1; i  >= 0; i--) {
        let current = cost[i] + Math.min(cost1, cost2);
        cost2 = cost1;
        cost1 = current;
    }

    return Math.min(cost1, cost2);
}