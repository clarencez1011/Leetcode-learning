import React, { useState } from 'react';
import { Download, CheckCircle, Circle, Calendar, BookOpen, RefreshCw } from 'lucide-react';

const Hot100Plan = () => {
  // 按照代码随想录顺序整理的题目
  const carlProblems = [
    // 第1周：数组（14题）
    { id: 704, title: '二分查找', difficulty: '简单', category: '数组-二分', day: 1, carl: true },
    { id: 27, title: '移除元素', difficulty: '简单', category: '数组-双指针', day: 1, carl: true },
    { id: 977, title: '有序数组的平方', difficulty: '简单', category: '数组-双指针', day: 2, carl: true },
    { id: 209, title: '长度最小的子数组', difficulty: '中等', category: '数组-滑动窗口', day: 2, carl: true },
    { id: 59, title: '螺旋矩阵II', difficulty: '中等', category: '数组-模拟', day: 3, carl: true },
    { id: 54, title: '螺旋矩阵', difficulty: '中等', category: '数组-模拟', day: 3, carl: true },
    
    // 第2周：链表（10题）
    { id: 203, title: '移除链表元素', difficulty: '简单', category: '链表', day: 8, carl: true },
    { id: 707, title: '设计链表', difficulty: '中等', category: '链表', day: 8, carl: true },
    { id: 206, title: '反转链表', difficulty: '简单', category: '链表', day: 9, carl: true },
    { id: 24, title: '两两交换链表中的节点', difficulty: '中等', category: '链表', day: 9, carl: true },
    { id: 19, title: '删除链表的倒数第N个节点', difficulty: '中等', category: '链表', day: 10, carl: true },
    { id: 160, title: '链表相交', difficulty: '简单', category: '链表', day: 10, carl: true },
    { id: 142, title: '环形链表II', difficulty: '中等', category: '链表', day: 11, carl: true },
    
    // 第3周：哈希表（10题）
    { id: 242, title: '有效的字母异位词', difficulty: '简单', category: '哈希表', day: 15, carl: true },
    { id: 349, title: '两个数组的交集', difficulty: '简单', category: '哈希表', day: 15, carl: true },
    { id: 202, title: '快乐数', difficulty: '简单', category: '哈希表', day: 16, carl: true },
    { id: 1, title: 'Two Sum', difficulty: '简单', category: '哈希表', day: 16, carl: true },
    { id: 454, title: '四数相加II', difficulty: '中等', category: '哈希表', day: 17, carl: true },
    { id: 383, title: '赎金信', difficulty: '简单', category: '哈希表', day: 17, carl: true },
    { id: 15, title: '三数之和', difficulty: '中等', category: '哈希表', day: 18, carl: true },
    { id: 18, title: '四数之和', difficulty: '中等', category: '哈希表', day: 18, carl: true },
    
    // 第4周：字符串（8题）
    { id: 344, title: '反转字符串', difficulty: '简单', category: '字符串', day: 22, carl: true },
    { id: 541, title: '反转字符串II', difficulty: '简单', category: '字符串', day: 22, carl: true },
    { id: 151, title: '翻转字符串里的单词', difficulty: '中等', category: '字符串', day: 23, carl: true },
    { id: 28, title: '实现strStr', difficulty: '简单', category: '字符串-KMP', day: 24, carl: true },
    { id: 459, title: '重复的子字符串', difficulty: '简单', category: '字符串-KMP', day: 24, carl: true },
    
    // 第5周：栈与队列（9题）
    { id: 232, title: '用栈实现队列', difficulty: '简单', category: '栈队列', day: 29, carl: true },
    { id: 225, title: '用队列实现栈', difficulty: '简单', category: '栈队列', day: 29, carl: true },
    { id: 20, title: '有效的括号', difficulty: '简单', category: '栈', day: 30, carl: true },
    { id: 1047, title: '删除字符串中的所有相邻重复项', difficulty: '简单', category: '栈', day: 30, carl: true },
    { id: 150, title: '逆波兰表达式求值', difficulty: '中等', category: '栈', day: 31, carl: true },
    { id: 239, title: '滑动窗口最大值', difficulty: '困难', category: '单调队列', day: 31, carl: true },
    { id: 347, title: '前K个高频元素', difficulty: '中等', category: '堆', day: 32, carl: true },
    
    // 第6-7周：二叉树（30题）
    { id: 144, title: '二叉树的前序遍历', difficulty: '简单', category: '二叉树遍历', day: 36, carl: true },
    { id: 94, title: '二叉树的中序遍历', difficulty: '简单', category: '二叉树遍历', day: 36, carl: true },
    { id: 145, title: '二叉树的后序遍历', difficulty: '简单', category: '二叉树遍历', day: 36, carl: true },
    { id: 102, title: '二叉树的层序遍历', difficulty: '中等', category: '二叉树遍历', day: 37, carl: true },
    { id: 226, title: '翻转二叉树', difficulty: '简单', category: '二叉树', day: 37, carl: true },
    { id: 101, title: '对称二叉树', difficulty: '简单', category: '二叉树', day: 38, carl: true },
    { id: 104, title: '二叉树的最大深度', difficulty: '简单', category: '二叉树', day: 38, carl: true },
    { id: 111, title: '二叉树的最小深度', difficulty: '简单', category: '二叉树', day: 39, carl: true },
    { id: 222, title: '完全二叉树的节点个数', difficulty: '中等', category: '二叉树', day: 39, carl: true },
    { id: 110, title: '平衡二叉树', difficulty: '简单', category: '二叉树', day: 40, carl: true },
    { id: 257, title: '二叉树的所有路径', difficulty: '简单', category: '二叉树', day: 40, carl: true },
    { id: 404, title: '左叶子之和', difficulty: '简单', category: '二叉树', day: 41, carl: true },
    { id: 513, title: '找树左下角的值', difficulty: '中等', category: '二叉树', day: 41, carl: true },
    { id: 112, title: '路径总和', difficulty: '简单', category: '二叉树', day: 42, carl: true },
    { id: 106, title: '从中序与后序遍历序列构造二叉树', difficulty: '中等', category: '二叉树构造', day: 43, carl: true },
    { id: 654, title: '最大二叉树', difficulty: '中等', category: '二叉树构造', day: 43, carl: true },
    { id: 617, title: '合并二叉树', difficulty: '简单', category: '二叉树', day: 44, carl: true },
    { id: 700, title: '二叉搜索树中的搜索', difficulty: '简单', category: 'BST', day: 44, carl: true },
    { id: 98, title: '验证二叉搜索树', difficulty: '中等', category: 'BST', day: 45, carl: true },
    { id: 530, title: '二叉搜索树的最小绝对差', difficulty: '简单', category: 'BST', day: 45, carl: true },
    { id: 501, title: '二叉搜索树中的众数', difficulty: '简单', category: 'BST', day: 46, carl: true },
    { id: 236, title: '二叉树的最近公共祖先', difficulty: '中等', category: '二叉树', day: 46, carl: true },
    { id: 235, title: '二叉搜索树的最近公共祖先', difficulty: '中等', category: 'BST', day: 47, carl: true },
    { id: 701, title: '二叉搜索树中的插入操作', difficulty: '中等', category: 'BST', day: 47, carl: true },
    { id: 450, title: '删除二叉搜索树中的节点', difficulty: '中等', category: 'BST', day: 48, carl: true },
    { id: 669, title: '修剪二叉搜索树', difficulty: '中等', category: 'BST', day: 48, carl: true },
    { id: 108, title: '将有序数组转换为二叉搜索树', difficulty: '简单', category: 'BST', day: 49, carl: true },
    { id: 538, title: '把二叉搜索树转换为累加树', difficulty: '中等', category: 'BST', day: 49, carl: true },
    
    // 第8-9周：回溯（18题）
    { id: 77, title: '组合', difficulty: '中等', category: '回溯-组合', day: 50, carl: true },
    { id: 216, title: '组合总和III', difficulty: '中等', category: '回溯-组合', day: 50, carl: true },
    { id: 17, title: '电话号码的字母组合', difficulty: '中等', category: '回溯-组合', day: 51, carl: true },
    { id: 39, title: '组合总和', difficulty: '中等', category: '回溯-组合', day: 51, carl: true },
    { id: 40, title: '组合总和II', difficulty: '中等', category: '回溯-组合', day: 52, carl: true },
    { id: 131, title: '分割回文串', difficulty: '中等', category: '回溯-分割', day: 52, carl: true },
    { id: 93, title: '复原IP地址', difficulty: '中等', category: '回溯-分割', day: 53, carl: true },
    { id: 78, title: '子集', difficulty: '中等', category: '回溯-子集', day: 53, carl: true },
    { id: 90, title: '子集II', difficulty: '中等', category: '回溯-子集', day: 54, carl: true },
    { id: 491, title: '递增子序列', difficulty: '中等', category: '回溯-子集', day: 54, carl: true },
    { id: 46, title: '全排列', difficulty: '中等', category: '回溯-排列', day: 55, carl: true },
    { id: 47, title: '全排列II', difficulty: '中等', category: '回溯-排列', day: 55, carl: true },
    { id: 332, title: '重新安排行程', difficulty: '困难', category: '回溯', day: 56, carl: true },
    { id: 51, title: 'N皇后', difficulty: '困难', category: '回溯', day: 56, carl: true },
    { id: 37, title: '解数独', difficulty: '困难', category: '回溯', day: 57, carl: true },
    
    // 第10-11周：贪心（20题）
    { id: 455, title: '分发饼干', difficulty: '简单', category: '贪心', day: 57, carl: true },
    { id: 376, title: '摆动序列', difficulty: '中等', category: '贪心', day: 58, carl: true },
    { id: 53, title: '最大子数组和', difficulty: '中等', category: '贪心', day: 58, carl: true },
    { id: 122, title: '买卖股票的最佳时机II', difficulty: '中等', category: '贪心', day: 59, carl: true },
    { id: 55, title: '跳跃游戏', difficulty: '中等', category: '贪心', day: 59, carl: true },
    { id: 45, title: '跳跃游戏II', difficulty: '中等', category: '贪心', day: 60, carl: true },
    { id: 1005, title: 'K次取反后最大化的数组和', difficulty: '简单', category: '贪心', day: 60, carl: true },
    { id: 134, title: '加油站', difficulty: '中等', category: '贪心', day: 61, carl: true },
    { id: 135, title: '分发糖果', difficulty: '困难', category: '贪心', day: 61, carl: true },
    { id: 860, title: '柠檬水找零', difficulty: '简单', category: '贪心', day: 62, carl: true },
    { id: 406, title: '根据身高重建队列', difficulty: '中等', category: '贪心', day: 62, carl: true },
    { id: 452, title: '用最少数量的箭引爆气球', difficulty: '中等', category: '贪心-区间', day: 63, carl: true },
    { id: 435, title: '无重叠区间', difficulty: '中等', category: '贪心-区间', day: 63, carl: true },
    { id: 763, title: '划分字母区间', difficulty: '中等', category: '贪心-区间', day: 64, carl: true },
    { id: 56, title: '合并区间', difficulty: '中等', category: '贪心-区间', day: 64, carl: true },
    { id: 738, title: '单调递增的数字', difficulty: '中等', category: '贪心', day: 65, carl: true },
    { id: 968, title: '监控二叉树', difficulty: '困难', category: '贪心', day: 65, carl: true },
    
    // 第12-16周：动态规划（50题）
    { id: 509, title: '斐波那契数', difficulty: '简单', category: 'DP-基础', day: 66, carl: true },
    { id: 70, title: '爬楼梯', difficulty: '简单', category: 'DP-基础', day: 66, carl: true },
    { id: 746, title: '使用最小花费爬楼梯', difficulty: '简单', category: 'DP-基础', day: 67, carl: true },
    { id: 62, title: '不同路径', difficulty: '中等', category: 'DP-基础', day: 67, carl: true },
    { id: 63, title: '不同路径II', difficulty: '中等', category: 'DP-基础', day: 68, carl: true },
    { id: 343, title: '整数拆分', difficulty: '中等', category: 'DP', day: 68, carl: true },
    { id: 96, title: '不同的二叉搜索树', difficulty: '中等', category: 'DP', day: 69, carl: true },
    { id: 416, title: '分割等和子集', difficulty: '中等', category: 'DP-01背包', day: 69, carl: true },
    { id: 1049, title: '最后一块石头的重量II', difficulty: '中等', category: 'DP-01背包', day: 70, carl: true },
    { id: 494, title: '目标和', difficulty: '中等', category: 'DP-01背包', day: 70, carl: true },
    { id: 474, title: '一和零', difficulty: '中等', category: 'DP-01背包', day: 71, carl: true },
    { id: 518, title: '零钱兑换II', difficulty: '中等', category: 'DP-完全背包', day: 71, carl: true },
    { id: 377, title: '组合总和IV', difficulty: '中等', category: 'DP-完全背包', day: 72, carl: true },
    { id: 322, title: '零钱兑换', difficulty: '中等', category: 'DP-完全背包', day: 72, carl: true },
    { id: 279, title: '完全平方数', difficulty: '中等', category: 'DP-完全背包', day: 73, carl: true },
    { id: 139, title: '单词拆分', difficulty: '中等', category: 'DP-完全背包', day: 73, carl: true },
    { id: 198, title: '打家劫舍', difficulty: '中等', category: 'DP-打家劫舍', day: 74, carl: true },
    { id: 213, title: '打家劫舍II', difficulty: '中等', category: 'DP-打家劫舍', day: 74, carl: true },
    { id: 337, title: '打家劫舍III', difficulty: '中等', category: 'DP-打家劫舍', day: 75, carl: true },
    { id: 121, title: '买卖股票的最佳时机', difficulty: '简单', category: 'DP-股票', day: 75, carl: true },
    { id: 123, title: '买卖股票的最佳时机III', difficulty: '困难', category: 'DP-股票', day: 76, carl: true },
    { id: 188, title: '买卖股票的最佳时机IV', difficulty: '困难', category: 'DP-股票', day: 76, carl: true },
    { id: 309, title: '最佳买卖股票时机含冷冻期', difficulty: '中等', category: 'DP-股票', day: 77, carl: true },
    { id: 714, title: '买卖股票的最佳时机含手续费', difficulty: '中等', category: 'DP-股票', day: 77, carl: true },
    { id: 300, title: '最长递增子序列', difficulty: '中等', category: 'DP-子序列', day: 78, carl: true },
    { id: 674, title: '最长连续递增序列', difficulty: '简单', category: 'DP-子序列', day: 78, carl: true },
    { id: 718, title: '最长重复子数组', difficulty: '中等', category: 'DP-子序列', day: 79, carl: true },
    { id: 1143, title: '最长公共子序列', difficulty: '中等', category: 'DP-子序列', day: 79, carl: true },
    { id: 1035, title: '不相交的线', difficulty: '中等', category: 'DP-子序列', day: 80, carl: true },
    { id: 392, title: '判断子序列', difficulty: '简单', category: 'DP-子序列', day: 80, carl: true },
    { id: 115, title: '不同的子序列', difficulty: '困难', category: 'DP-子序列', day: 81, carl: true },
    { id: 583, title: '两个字符串的删除操作', difficulty: '中等', category: 'DP-子序列', day: 81, carl: true },
    { id: 72, title: '编辑距离', difficulty: '困难', category: 'DP-子序列', day: 82, carl: true },
    { id: 647, title: '回文子串', difficulty: '中等', category: 'DP-回文', day: 82, carl: true },
    { id: 516, title: '最长回文子序列', difficulty: '中等', category: 'DP-回文', day: 83, carl: true },
    { id: 200, title: '岛屿数量', difficulty: '中等', category: '图-DFS', day: 85, carl: true },
    { id: 994, title: '腐烂的橘子', difficulty: '中等', category: '图-BFS', day: 85, carl: true },
    { id: 207, title: '课程表', difficulty: '中等', category: '图-拓扑排序', day: 86, carl: true },
    { id: 208, title: '实现Trie', difficulty: '中等', category: 'Trie树', day: 86, carl: true },
  ];

  const generateFullPlan = () => {
    const plan = [];
    const reviewIntervals = [1, 3, 7, 14];
    
    for (let day = 1; day <= 90; day++) {
      const dayPlan = {
        day,
        newProblems: carlProblems.filter(p => p.day === day),
        reviews: []
      };
      
      reviewIntervals.forEach(interval => {
        const reviewDay = day - interval;
        if (reviewDay > 0) {
          const reviewProblems = carlProblems.filter(p => p.day === reviewDay);
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
    link.download = '代码随想录刷题计划表.csv';
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

  const totalProblems = carlProblems.length;
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
                📚 代码随想录 刷题计划
              </h1>
              <p className="text-gray-600">90天系统掌握算法 · 跟随Carl哥顺序 · 1-3-7-14天复习法</p>
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
          
          <div className="grid grid-cols-7 md:grid-cols-14 gap-2 max-h-96 overflow-y-auto">
            {planData.slice(0, 90).map((dayPlan) => {
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

        <div className="mt-6 bg-gradient-to-r from-indigo-50 to-purple-50 border-2 border-indigo-200 rounded-xl p-6">
          <h3 className="font-bold text-indigo-900 mb-3 flex items-center gap-2">
            <span className="text-2xl">📖</span>
            代码随想录学习建议
          </h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-indigo-800">
            <div>
              <p className="font-semibold mb-2">💡 新题学习流程：</p>
              <ul className="space-y-1 ml-4">
                <li>• 先看理论基础文章理解核心思想</li>
                <li>• 独立思考15-20分钟写出代码</li>
                <li>• 对照Carl题解学习最优解法</li>
                <li>• 看视频讲解加深理解难点</li>
                <li>• 总结模板和做题套路</li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">🔄 复习标准：</p>
              <ul className="space-y-1 ml-4">
                <li>• 5分钟内AC：快速过一遍思路</li>
                <li>• 10-15分钟AC：认真重做并优化</li>
                <li>• 做不出来：重新学习当新题</li>
                <li>• 关注时间/空间复杂度优化</li>
                <li>• 总结同类型题目的通用模板</li>
              </ul>
            </div>
          </div>
          <div className="mt-4 p-4 bg-white rounded-lg border border-indigo-200">
            <p className="text-sm text-gray-700">
              <span className="font-semibold text-indigo-700">💬 学习顺序说明：</span>
              本计划严格按照代码随想录官方顺序：数组 → 链表 → 哈希表 → 字符串 → 栈队列 → 二叉树 → 回溯 → 贪心 → 动态规划 → 图论。
              每个专题都有理论基础和总结篇，建议配合 
              <a href="https://programmercarl.com" target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline font-medium">
                programmercarl.com
              </a> 
              网站学习。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hot100Plan;
