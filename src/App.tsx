import React, { useState } from 'react';
import { Download, CheckCircle, Circle, Calendar, BookOpen, RefreshCw } from 'lucide-react';

const Hot100Plan = () => {
  // 定义Hot 100题目
  const hot100Problems = [
    // 第1周：哈希表+数组
    { id: 1, title: 'Two Sum', difficulty: '简单', category: '哈希表', day: 1 },
    { id: 49, title: 'Group Anagrams', difficulty: '中等', category: '哈希表', day: 1 },
    { id: 128, title: 'Longest Consecutive Sequence', difficulty: '中等', category: '哈希表', day: 1 },
    { id: 283, title: 'Move Zeroes', difficulty: '简单', category: '双指针', day: 2 },
    { id: 11, title: 'Container With Most Water', difficulty: '中等', category: '双指针', day: 2 },
    { id: 3, title: 'Longest Substring Without Repeating', difficulty: '中等', category: '滑动窗口', day: 3 },
    { id: 438, title: 'Find All Anagrams', difficulty: '中等', category: '滑动窗口', day: 3 },
    { id: 53, title: 'Maximum Subarray', difficulty: '中等', category: '数组', day: 4 },
    { id: 56, title: 'Merge Intervals', difficulty: '中等', category: '数组', day: 4 },
    { id: 238, title: 'Product of Array Except Self', difficulty: '中等', category: '数组', day: 5 },
    { id: 41, title: 'First Missing Positive', difficulty: '困难', category: '数组', day: 5 },
    
    // 第2周：链表+栈
    { id: 206, title: 'Reverse Linked List', difficulty: '简单', category: '链表', day: 8 },
    { id: 21, title: 'Merge Two Sorted Lists', difficulty: '简单', category: '链表', day: 8 },
    { id: 141, title: 'Linked List Cycle', difficulty: '简单', category: '链表', day: 8 },
    { id: 142, title: 'Linked List Cycle II', difficulty: '中等', category: '链表', day: 9 },
    { id: 160, title: 'Intersection of Two Lists', difficulty: '简单', category: '链表', day: 9 },
    { id: 234, title: 'Palindrome Linked List', difficulty: '简单', category: '链表', day: 10 },
    { id: 148, title: 'Sort List', difficulty: '中等', category: '链表', day: 10 },
    { id: 23, title: 'Merge k Sorted Lists', difficulty: '困难', category: '链表', day: 11 },
    { id: 25, title: 'Reverse Nodes in k-Group', difficulty: '困难', category: '链表', day: 11 },
    { id: 20, title: 'Valid Parentheses', difficulty: '简单', category: '栈', day: 12 },
    { id: 155, title: 'Min Stack', difficulty: '中等', category: '栈', day: 12 },
    { id: 739, title: 'Daily Temperatures', difficulty: '中等', category: '单调栈', day: 13 },
    { id: 84, title: 'Largest Rectangle', difficulty: '困难', category: '单调栈', day: 13 },
    
    // 第3周：二叉树基础
    { id: 144, title: 'Binary Tree Preorder', difficulty: '简单', category: '二叉树', day: 15 },
    { id: 94, title: 'Binary Tree Inorder', difficulty: '简单', category: '二叉树', day: 15 },
    { id: 102, title: 'Level Order Traversal', difficulty: '中等', category: '二叉树', day: 16 },
    { id: 104, title: 'Max Depth', difficulty: '简单', category: '二叉树', day: 16 },
    { id: 226, title: 'Invert Binary Tree', difficulty: '简单', category: '二叉树', day: 17 },
    { id: 101, title: 'Symmetric Tree', difficulty: '简单', category: '二叉树', day: 17 },
    { id: 543, title: 'Diameter of Binary Tree', difficulty: '简单', category: '二叉树', day: 18 },
    { id: 437, title: 'Path Sum III', difficulty: '中等', category: '二叉树', day: 18 },
    { id: 105, title: 'Construct from Preorder/Inorder', difficulty: '中等', category: '二叉树', day: 19 },
    { id: 114, title: 'Flatten to Linked List', difficulty: '中等', category: '二叉树', day: 19 },
    
    // 第4周：二叉搜索树+二叉树进阶
    { id: 98, title: 'Validate BST', difficulty: '中等', category: 'BST', day: 22 },
    { id: 230, title: 'Kth Smallest in BST', difficulty: '中等', category: 'BST', day: 22 },
    { id: 538, title: 'Convert BST to Greater Tree', difficulty: '中等', category: 'BST', day: 23 },
    { id: 236, title: 'Lowest Common Ancestor', difficulty: '中等', category: '二叉树', day: 23 },
    { id: 124, title: 'Binary Tree Max Path Sum', difficulty: '困难', category: '二叉树', day: 24 },
    { id: 297, title: 'Serialize/Deserialize Tree', difficulty: '困难', category: '二叉树', day: 24 },
    
    // 第5周：图论
    { id: 200, title: 'Number of Islands', difficulty: '中等', category: '图-DFS', day: 29 },
    { id: 994, title: 'Rotting Oranges', difficulty: '中等', category: '图-BFS', day: 29 },
    { id: 207, title: 'Course Schedule', difficulty: '中等', category: '拓扑排序', day: 30 },
    { id: 208, title: 'Implement Trie', difficulty: '中等', category: 'Trie', day: 30 },
    { id: 399, title: 'Evaluate Division', difficulty: '中等', category: '图-DFS', day: 31 },
    { id: 406, title: 'Queue Reconstruction', difficulty: '中等', category: '贪心', day: 31 },
    
    // 第6周：动态规划-基础
    { id: 70, title: 'Climbing Stairs', difficulty: '简单', category: 'DP-基础', day: 36 },
    { id: 118, title: 'Pascals Triangle', difficulty: '简单', category: 'DP-基础', day: 36 },
    { id: 198, title: 'House Robber', difficulty: '中等', category: 'DP-线性', day: 37 },
    { id: 213, title: 'House Robber II', difficulty: '中等', category: 'DP-线性', day: 37 },
    { id: 279, title: 'Perfect Squares', difficulty: '中等', category: 'DP-完全背包', day: 38 },
    { id: 322, title: 'Coin Change', difficulty: '中等', category: 'DP-完全背包', day: 38 },
    { id: 139, title: 'Word Break', difficulty: '中等', category: 'DP-字符串', day: 39 },
    { id: 300, title: 'Longest Increasing Subsequence', difficulty: '中等', category: 'DP-子序列', day: 39 },
    
    // 第7周：动态规划-进阶
    { id: 152, title: 'Maximum Product Subarray', difficulty: '中等', category: 'DP-数组', day: 43 },
    { id: 416, title: 'Partition Equal Subset Sum', difficulty: '中等', category: 'DP-背包', day: 43 },
    { id: 32, title: 'Longest Valid Parentheses', difficulty: '困难', category: 'DP-字符串', day: 44 },
    { id: 72, title: 'Edit Distance', difficulty: '困难', category: 'DP-字符串', day: 44 },
    { id: 5, title: 'Longest Palindromic Substring', difficulty: '中等', category: 'DP-字符串', day: 45 },
    { id: 647, title: 'Palindromic Substrings', difficulty: '中等', category: 'DP-字符串', day: 45 },
    { id: 221, title: 'Maximal Square', difficulty: '中等', category: 'DP-矩阵', day: 46 },
    { id: 85, title: 'Maximal Rectangle', difficulty: '困难', category: 'DP-矩阵', day: 46 },
    
    // 第8周：回溯
    { id: 46, title: 'Permutations', difficulty: '中等', category: '回溯-排列', day: 50 },
    { id: 47, title: 'Permutations II', difficulty: '中等', category: '回溯-排列', day: 50 },
    { id: 78, title: 'Subsets', difficulty: '中等', category: '回溯-子集', day: 51 },
    { id: 90, title: 'Subsets II', difficulty: '中等', category: '回溯-子集', day: 51 },
    { id: 39, title: 'Combination Sum', difficulty: '中等', category: '回溯-组合', day: 52 },
    { id: 40, title: 'Combination Sum II', difficulty: '中等', category: '回溯-组合', day: 52 },
    { id: 22, title: 'Generate Parentheses', difficulty: '中等', category: '回溯', day: 53 },
    { id: 79, title: 'Word Search', difficulty: '中等', category: '回溯-矩阵', day: 53 },
    { id: 131, title: 'Palindrome Partitioning', difficulty: '中等', category: '回溯', day: 54 },
    { id: 51, title: 'N-Queens', difficulty: '困难', category: '回溯', day: 54 },
    
    // 第9周：贪心+其他
    { id: 121, title: 'Best Time to Buy/Sell Stock', difficulty: '简单', category: '贪心', day: 57 },
    { id: 122, title: 'Best Time II', difficulty: '中等', category: '贪心', day: 57 },
    { id: 55, title: 'Jump Game', difficulty: '中等', category: '贪心', day: 58 },
    { id: 45, title: 'Jump Game II', difficulty: '中等', category: '贪心', day: 58 },
    { id: 763, title: 'Partition Labels', difficulty: '中等', category: '贪心', day: 59 },
    { id: 621, title: 'Task Scheduler', difficulty: '中等', category: '贪心', day: 59 },
    
    // 第10周：高频其他题
    { id: 136, title: 'Single Number', difficulty: '简单', category: '位运算', day: 64 },
    { id: 169, title: 'Majority Element', difficulty: '简单', category: '数组', day: 64 },
    { id: 75, title: 'Sort Colors', difficulty: '中等', category: '排序', day: 65 },
    { id: 31, title: 'Next Permutation', difficulty: '中等', category: '数组', day: 65 },
    { id: 287, title: 'Find Duplicate Number', difficulty: '中等', category: '数组', day: 66 },
    { id: 240, title: 'Search 2D Matrix II', difficulty: '中等', category: '矩阵', day: 66 },
    { id: 347, title: 'Top K Frequent Elements', difficulty: '中等', category: '堆', day: 67 },
    { id: 215, title: 'Kth Largest Element', difficulty: '中等', category: '堆', day: 67 },
    { id: 295, title: 'Find Median from Stream', difficulty: '困难', category: '堆', day: 68 },
    { id: 239, title: 'Sliding Window Maximum', difficulty: '困难', category: '单调队列', day: 68 },
  ];

  // 生成完整的70天计划（包括复习）
  const generateFullPlan = () => {
    const plan = [];
    const reviewIntervals = [1, 3, 7, 14];
    
    for (let day = 1; day <= 70; day++) {
      const dayPlan = {
        day,
        newProblems: hot100Problems.filter(p => p.day === day),
        reviews: []
      };
      
      reviewIntervals.forEach(interval => {
        const reviewDay = day - interval;
        if (reviewDay > 0) {
          const reviewProblems = hot100Problems.filter(p => p.day === reviewDay);
          if (reviewProblems.length > 0) {
            dayPlan.reviews.push({
              interval,
              reviewRound: interval === 1 ? '第1次' : interval === 3 ? '第2次' : interval === 7 ? '第3次' : '第4次',
              problems: reviewProblems,
              originalDay: reviewDay
            });
          }
        }
      });
      
      plan.push(dayPlan);
    }
    
    return plan;
  };

  const [checkedProblems, setCheckedProblems] = useState({});
  const [currentDay, setCurrentDay] = useState(1);
  const planData = generateFullPlan();

  const toggleProblem = (problemId) => {
    setCheckedProblems(prev => ({
      ...prev,
      [problemId]: !prev[problemId]
    }));
  };

  const downloadCSV = () => {
    let csv = '日期,任务类型,复习轮次,题号,题目,难度,分类,原学习日期\n';
    
    planData.forEach(dayPlan => {
      dayPlan.newProblems.forEach(p => {
        csv += `第${dayPlan.day}天,新题学习,-,${p.id},${p.title},${p.difficulty},${p.category},-\n`;
      });
      
      dayPlan.reviews.forEach(review => {
        review.problems.forEach(p => {
          csv += `第${dayPlan.day}天,复习,${review.reviewRound},${p.id},${p.title},${p.difficulty},${p.category},第${review.originalDay}天\n`;
        });
      });
      
      if (dayPlan.newProblems.length === 0 && dayPlan.reviews.length === 0) {
        csv += `第${dayPlan.day}天,休息日,-,-,-,-,-,-\n`;
      }
    });
    
    const blob = new Blob(['\ufeff' + csv], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'LeetCode_Hot100_完整计划表.csv';
    link.click();
  };

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case '简单': return 'text-green-600 bg-green-50 border-green-200';
      case '中等': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case '困难': return 'text-red-600 bg-red-50 border-red-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  const totalProblems = hot100Problems.length;
  const completedProblems = Object.values(checkedProblems).filter(Boolean).length;
  const progress = Math.round((completedProblems / totalProblems) * 100);

  const currentDayPlan = planData[currentDay - 1];
  const totalNewToday = currentDayPlan?.newProblems.length || 0;
  const totalReviewToday = currentDayPlan?.reviews.reduce((sum, r) => sum + r.problems.length, 0) || 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">
                🔥 LeetCode Hot 100 刷题计划
              </h1>
              <p className="text-gray-600">70天掌握高频面试题 · 1-3-7-14天复习法</p>
            </div>
            <button
              onClick={downloadCSV}
              className="flex items-center gap-2 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors shadow-md"
            >
              <Download size={20} />
              导出完整计划
            </button>
          </div>
          
          <div className="mt-6">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">
                总体进度: {completedProblems}/{totalProblems} 题
              </span>
              <span className="text-sm font-bold text-indigo-600">{progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-indigo-500 to-purple-600 h-3 rounded-full transition-all duration-500"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5 mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-bold text-gray-800 flex items-center gap-2">
              <Calendar className="text-indigo-600" size={24} />
              选择学习日期
            </h2>
            <div className="flex items-center gap-3">
              <span className="text-sm text-gray-600">
                今日任务: <span className="font-semibold text-indigo-600">{totalNewToday}道新题</span> + 
                <span className="font-semibold text-amber-600"> {totalReviewToday}道复习</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-7 md:grid-cols-14 gap-2">
            {planData.map((dayPlan) => {
              const hasNew = dayPlan.newProblems.length > 0;
              const hasReview = dayPlan.reviews.length > 0;
              const isRest = !hasNew && !hasReview;
              
              return (
                <button
                  key={dayPlan.day}
                  onClick={() => setCurrentDay(dayPlan.day)}
                  className={`p-3 rounded-lg text-sm font-medium transition-all ${
                    currentDay === dayPlan.day
                      ? 'bg-indigo-600 text-white shadow-lg scale-105'
                      : isRest
                      ? 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                      : 'bg-white border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50'
                  }`}
                >
                  <div className="text-center">
                    <div className="font-bold">D{dayPlan.day}</div>
                    {!isRest && (
                      <div className="text-xs mt-1 opacity-80">
                        {hasNew && `+${dayPlan.newProblems.length}`}
                        {hasReview && ` ↻${dayPlan.reviews.reduce((sum, r) => sum + r.problems.length, 0)}`}
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-indigo-600">{currentDay}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800">第 {currentDay} 天学习计划</h2>
              <p className="text-sm text-gray-600 mt-1">
                {currentDayPlan?.newProblems.length > 0 && `${currentDayPlan.newProblems.length}道新题`}
                {currentDayPlan?.newProblems.length > 0 && currentDayPlan?.reviews.length > 0 && ' + '}
                {currentDayPlan?.reviews.length > 0 && `${currentDayPlan.reviews.reduce((sum, r) => sum + r.problems.length, 0)}道复习题`}
                {!currentDayPlan?.newProblems.length && !currentDayPlan?.reviews.length && '今日休息'}
              </p>
            </div>
          </div>

          {currentDayPlan?.newProblems.length > 0 && (
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="text-indigo-600" size={20} />
                <h3 className="text-lg font-bold text-gray-800">
                  新题学习 ({currentDayPlan.newProblems.length}题)
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentDayPlan.newProblems.map(problem => (
                  <div
                    key={`new-${problem.id}`}
                    onClick={() => toggleProblem(problem.id)}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all hover:shadow-md ${
                      checkedProblems[problem.id] 
                        ? 'bg-green-50 border-green-300' 
                        : 'bg-white border-gray-200 hover:border-indigo-300'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      {checkedProblems[problem.id] ? (
                        <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={24} />
                      ) : (
                        <Circle className="text-gray-300 flex-shrink-0 mt-1" size={24} />
                      )}
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="font-mono text-lg font-bold text-gray-800">
                            #{problem.id}
                          </span>
                          <span className={`text-xs px-2 py-1 rounded-full font-medium border ${getDifficultyColor(problem.difficulty)}`}>
                            {problem.difficulty}
                          </span>
                        </div>
                        <p className="text-base font-medium text-gray-800 mb-1">{problem.title}</p>
                        <p className="text-sm text-gray-600 bg-gray-50 px-2 py-1 rounded inline-block">
                          {problem.category}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {currentDayPlan?.reviews.length > 0 && (
            <div>
              <div className="flex items-center gap-2 mb-4">
                <RefreshCw className="text-amber-600" size={20} />
                <h3 className="text-lg font-bold text-gray-800">
                  复习计划 ({currentDayPlan.reviews.reduce((sum, r) => sum + r.problems.length, 0)}题)
                </h3>
              </div>
              <div className="space-y-4">
                {currentDayPlan.reviews.map((review, idx) => (
                  <div key={idx} className="bg-amber-50 rounded-xl p-4 border-2 border-amber-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-semibold text-amber-900">
                        {review.reviewRound} · 距离上次学习 {review.interval} 天
                      </h4>
                      <span className="text-sm text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                        来自第{review.originalDay}天
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {review.problems.map(problem => (
                        <div
                          key={`review-${problem.id}-${idx}`}
                          onClick={() => toggleProblem(problem.id)}
                          className={`p-3 rounded-lg cursor-pointer transition-all ${
                            checkedProblems[problem.id]
                              ? 'bg-green-100 border-2 border-green-400'
                              : 'bg-white border-2 border-amber-300 hover:bg-amber-50'
                          }`}
                        >
                          <div className="flex items-center gap-2">
                            {checkedProblems[problem.id] ? (
                              <CheckCircle className="text-green-500 flex-shrink-0" size={18} />
                            ) : (
                              <Circle className="text-gray-400 flex-shrink-0" size={18} />
                            )}
                            <div className="flex-1 min-w-0">
                              <div className="font-mono text-sm font-bold text-gray-800">
                                #{problem.id}
                              </div>
                              <div className="text-xs text-gray-600 truncate">
                                {problem.title}
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {!currentDayPlan?.newProblems.length && !currentDayPlan?.reviews.length && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🎉</div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">今日休息</h3>
              <p className="text-gray-600">给大脑一些放松时间，明天继续加油！</p>
            </div>
          )}
        </div>

        <div className="mt-6 bg-indigo-50 border-2 border-indigo-200 rounded-xl p-6">
          <h3 className="font-bold text-indigo-900 mb-3">📌 学习建议</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-indigo-800">
            <div>
              <p className="font-semibold mb-2">💡 新题学习流程：</p>
              <ul className="space-y-1 ml-4">
                <li>• 独立思考15分钟</li>
                <li>• 看题解理解思路</li>
                <li>• 自己重新实现</li>
                <li>• 记录关键点和易错点</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">🔄 复习标准：</p>
              <ul className="space-y-1 ml-4">
                <li>• 5分钟内做出：快速过一遍</li>
                <li>• 15分钟内做出：认真重做</li>
                <li>• 做不出来：当新题重学</li>
                <li>• 目标：每次用时递减</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot100Plan;
