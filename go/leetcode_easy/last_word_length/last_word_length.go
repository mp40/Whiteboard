package last_word_length

import "strings"

func LengthOfLastWord(s string) int {
	if len(s) == 0 {
		return 0
	}

	s = strings.TrimSpace(s)
	a := strings.Split(s, " ")

	return len(a[len(a)-1])
}
