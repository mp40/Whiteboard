package longest_common_prefix

// 14. Longest Common Prefix
// https://leetcode.com/problems/longest-common-prefix/

func LongestCommonPrefix(strs []string) string {
	if len(strs) == 0 {
		return ""
	}

	if len(strs) == 1 {
		return strs[0]
	}

	result := strs[0]

	for i := 1; i < len(strs); i++ {
		for j := 0; j < len(result); j++ {
			if len(strs[i]) == j || strs[i][j] != result[j] {
				result = result[0:j]
				break
			}
		}
	}

	return result
}
