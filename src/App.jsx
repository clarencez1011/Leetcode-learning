// ✅ 1. 之前已经学过的题：题号 -> 当时的 day（1~31）
const doneDayMap = {
  1: 1, 49: 1, 128: 1,
  11: 2, 283: 2,
  3: 3, 438: 3,
  53: 4, 56: 4,
  41: 5, 238: 5,
  21: 8, 141: 8, 206: 8,
  142: 9, 160: 9,
  148: 10, 234: 10,
  23: 11, 25: 11,
  20: 12, 155: 12,
  84: 13, 739: 13,
  94: 15, 104: 15,
  101: 16, 226: 16,
  102: 17, 199: 17,
  98: 18, 108: 18,
  230: 19, 236: 19,
  437: 22, 543: 22,
  105: 23, 114: 23,
  200: 29, 994: 29,
  207: 30, 208: 30,
};

// ✅ 2. 最新 Top 100 Liked 题单（只保留截图里的题）
// 不带 day 信息，由下面的 build 函数自动分配 day
const rawProblems = [
  // Backtracking
  { id: 17, title: 'Letter Combinations of a Phone Number', difficulty: '中等', category: '回溯-组合' },
  { id: 22, title: 'Generate Parentheses', difficulty: '中等', category: '回溯' },
  { id: 39, title: 'Combination Sum', difficulty: '中等', category: '回溯-组合' },
  { id: 46, title: 'Permutations', difficulty: '中等', category: '回溯-排列' },
  { id: 51, title: 'N-Queens', difficulty: '困难', category: '回溯' },
  { id: 78, title: 'Subsets', difficulty: '中等', category: '回溯-子集' },
  { id: 79, title: 'Word Search', difficulty: '中等', category: '回溯-矩阵' },
  { id: 131, title: 'Palindrome Partitioning', difficulty: '中等', category: '回溯' },

  // Binary Search
  { id: 4, title: 'Median of Two Sorted Arrays', difficulty: '困难', category: '二分查找' },
  { id: 33, title: 'Search in Rotated Sorted Array', difficulty: '中等', category: '二分查找' },
  { id: 34, title: 'Find First and Last Position of Element in Sorted Array', difficulty: '中等', category: '二分查找' },
  { id: 35, title: 'Search Insert Position', difficulty: '简单', category: '二分查找' },
  { id: 74, title: 'Search a 2D Matrix', difficulty: '中等', category: '二分查找' },
  { id: 124, title: 'Binary Tree Maximum Path Sum', difficulty: '困难', category: '二叉树' },
  { id: 153, title: 'Find Minimum in Rotated Sorted Array', difficulty: '中等', category: '二分查找' },

  // Binary Tree
  { id: 94, title: 'Binary Tree Inorder Traversal', difficulty: '简单', category: '二叉树' },
  { id: 98, title: 'Validate Binary Search Tree', difficulty: '中等', category: 'BST' },
  { id: 101, title: 'Symmetric Tree', difficulty: '简单', category: '二叉树' },
  { id: 102, title: 'Binary Tree Level Order Traversal', difficulty: '中等', category: '二叉树' },
  { id: 104, title: 'Maximum Depth of Binary Tree', difficulty: '简单', category: '二叉树' },
  { id: 105, title: 'Construct Binary Tree from Preorder and Inorder Traversal', difficulty: '中等', category: '二叉树' },
  { id: 108, title: 'Convert Sorted Array to Binary Search Tree', difficulty: '简单', category: 'BST' },
  { id: 114, title: 'Flatten Binary Tree to Linked List', difficulty: '中等', category: '二叉树' },
  { id: 199, title: 'Binary Tree Right Side View', difficulty: '中等', category: '二叉树' },
  { id: 226, title: 'Invert Binary Tree', difficulty: '简单', category: '二叉树' },
  { id: 230, title: 'Kth Smallest Element in a BST', difficulty: '中等', category: 'BST' },
  { id: 236, title: 'Lowest Common Ancestor of a Binary Tree', difficulty: '中等', category: '二叉树' },
  { id: 437, title: 'Path Sum III', difficulty: '中等', category: '二叉树' },
  { id: 543, title: 'Diameter of Binary Tree', difficulty: '简单', category: '二叉树' },

  // Dynamic Programming
  { id: 5, title: 'Longest Palindromic Substring', difficulty: '中等', category: 'DP-字符串' },
  { id: 32, title: 'Longest Valid Parentheses', difficulty: '困难', category: 'DP-字符串' },
  { id: 62, title: 'Unique Paths', difficulty: '中等', category: 'DP-矩阵' },
  { id: 64, title: 'Minimum Path Sum', difficulty: '中等', category: 'DP-矩阵' },
  { id: 70, title: 'Climbing Stairs', difficulty: '简单', category: 'DP-基础' },
  { id: 72, title: 'Edit Distance', difficulty: '困难', category: 'DP-字符串' },
  { id: 118, title: 'Pascals Triangle', difficulty: '简单', category: 'DP-基础' },
  { id: 139, title: 'Word Break', difficulty: '中等', category: 'DP-字符串' },
  { id: 152, title: 'Maximum Product Subarray', difficulty: '中等', category: 'DP-数组' },
  { id: 198, title: 'House Robber', difficulty: '中等', category: 'DP-线性' },
  { id: 279, title: 'Perfect Squares', difficulty: '中等', category: 'DP-完全背包' },
  { id: 300, title: 'Longest Increasing Subsequence', difficulty: '中等', category: 'DP-子序列' },
  { id: 322, title: 'Coin Change', difficulty: '中等', category: 'DP-完全背包' },
  { id: 416, title: 'Partition Equal Subset Sum', difficulty: '中等', category: 'DP-背包' },
  { id: 1143, title: 'Longest Common Subsequence', difficulty: '中等', category: 'DP-字符串' },

  // Graph
  { id: 200, title: 'Number of Islands', difficulty: '中等', category: '图-DFS' },
  { id: 207, title: 'Course Schedule', difficulty: '中等', category: '拓扑排序' },
  { id: 994, title: 'Rotting Oranges', difficulty: '中等', category: '图-BFS' },

  // Greedy
  { id: 45, title: 'Jump Game II', difficulty: '中等', category: '贪心' },
  { id: 55, title: 'Jump Game', difficulty: '中等', category: '贪心' },
  { id: 121, title: 'Best Time to Buy and Sell Stock', difficulty: '简单', category: '贪心' },
  { id: 763, title: 'Partition Labels', difficulty: '中等', category: '贪心' },

  // Hashing
  { id: 1, title: 'Two Sum', difficulty: '简单', category: '哈希表' },
  { id: 49, title: 'Group Anagrams', difficulty: '中等', category: '哈希表' },
  { id: 128, title: 'Longest Consecutive Sequence', difficulty: '中等', category: '哈希表' },
  { id: 560, title: 'Subarray Sum Equals K', difficulty: '中等', category: '哈希表' },

  // Heap
  { id: 215, title: 'Kth Largest Element in an Array', difficulty: '中等', category: '堆' },
  { id: 295, title: 'Find Median from Data Stream', difficulty: '困难', category: '堆' },
  { id: 347, title: 'Top K Frequent Elements', difficulty: '中等', category: '堆' },

  // Linked Lists
  { id: 2, title: 'Add Two Numbers', difficulty: '中等', category: '链表' },
  { id: 19, title: 'Remove Nth Node From End of List', difficulty: '中等', category: '链表' },
  { id: 21, title: 'Merge Two Sorted Lists', difficulty: '简单', category: '链表' },
  { id: 23, title: 'Merge k Sorted Lists', difficulty: '困难', category: '链表' },
  { id: 24, title: 'Swap Nodes in Pairs', difficulty: '中等', category: '链表' },
  { id: 25, title: 'Reverse Nodes in k-Group', difficulty: '困难', category: '链表' },
  { id: 138, title: 'Copy List with Random Pointer', difficulty: '中等', category: '链表' },
  { id: 141, title: 'Linked List Cycle', difficulty: '简单', category: '链表' },
  { id: 142, title: 'Linked List Cycle II', difficulty: '中等', category: '链表' },
  { id: 146, title: 'LRU Cache', difficulty: '中等', category: '设计' },
  { id: 148, title: 'Sort List', difficulty: '中等', category: '链表' },
  { id: 160, title: 'Intersection of Two Linked Lists', difficulty: '简单', category: '链表' },
  { id: 206, title: 'Reverse Linked List', difficulty: '简单', category: '链表' },
  { id: 234, title: 'Palindrome Linked List', difficulty: '简单', category: '链表' },

  // Matrix
  { id: 48, title: 'Rotate Image', difficulty: '中等', category: '矩阵' },
  { id: 54, title: 'Spiral Matrix', difficulty: '中等', category: '矩阵' },
  { id: 73, title: 'Set Matrix Zeroes', difficulty: '中等', category: '矩阵' },
  { id: 240, title: 'Search a 2D Matrix II', difficulty: '中等', category: '矩阵' },

  // Sliding Window
  { id: 3, title: 'Longest Substring Without Repeating Characters', difficulty: '中等', category: '滑动窗口' },
  { id: 76, title: 'Minimum Window Substring', difficulty: '困难', category: '滑动窗口' },
  { id: 239, title: 'Sliding Window Maximum', difficulty: '困难', category: '单调队列' },
  { id: 438, title: 'Find All Anagrams in a String', difficulty: '中等', category: '滑动窗口' },

  // Stack
  { id: 20, title: 'Valid Parentheses', difficulty: '简单', category: '栈' },
  { id: 84, title: 'Largest Rectangle in Histogram', difficulty: '困难', category: '单调栈' },
  { id: 155, title: 'Min Stack', difficulty: '中等', category: '栈' },
  { id: 394, title: 'Decode String', difficulty: '中等', category: '栈-字符串' },
  { id: 739, title: 'Daily Temperatures', difficulty: '中等', category: '单调栈' },

  // Two Pointers
  { id: 11, title: 'Container With Most Water', difficulty: '中等', category: '双指针' },
  { id: 15, title: '3Sum', difficulty: '中等', category: '双指针' },
  { id: 42, title: 'Trapping Rain Water', difficulty: '困难', category: '双指针' },
  { id: 283, title: 'Move Zeroes', difficulty: '简单', category: '双指针' },

  // Trie
  { id: 208, title: 'Implement Trie (Prefix Tree)', difficulty: '中等', category: 'Trie' },

  // Misc
  { id: 31, title: 'Next Permutation', difficulty: '中等', category: '数组' },
  { id: 41, title: 'First Missing Positive', difficulty: '困难', category: '数组' },
  { id: 53, title: 'Maximum Subarray', difficulty: '中等', category: '数组' },
  { id: 56, title: 'Merge Intervals', difficulty: '中等', category: '数组' },
  { id: 75, title: 'Sort Colors', difficulty: '中等', category: '排序' },
  { id: 136, title: 'Single Number', difficulty: '简单', category: '位运算' },
  { id: 169, title: 'Majority Element', difficulty: '简单', category: '数组' },
  { id: 189, title: 'Rotate Array', difficulty: '中等', category: '数组' },
  { id: 238, title: 'Product of Array Except Self', difficulty: '中等', category: '数组' },
  { id: 287, title: 'Find the Duplicate Number', difficulty: '中等', category: '数组' },
];

// ✅ 3. 根据 doneDayMap + “每天两道新题” 自动生成带 day 的题库
const hot100Problems = (() => {
  const solved = [];
  const unsolved = [];

  rawProblems.forEach((p) => {
    const day = doneDayMap[p.id];
    if (day) {
      solved.push({ ...p, day });
    } else {
      unsolved.push(p);
    }
  });

  // 未做题按题号排序，你也可以改成按分类排
  unsolved.sort((a, b) => a.id - b.id);

  let day = 32; // 从第 32 天开始排新题
  const result = [...solved];

  unsolved.forEach((p, idx) => {
    result.push({ ...p, day });
    if (idx % 2 === 1) {
      day += 1; // 每两题挪一天
    }
  });

  return result;
})();
export default App
