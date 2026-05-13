class Solution {
    public boolean isAnagram(String s, String t) {
        if (s.length() != t.length()) {
            return false;
        }

        HashMap<String, Integer> mapS = new HashMap<>();
        HashMap<String, Integer> mapT = new HashMap<>();
        String[] first = s.split("");
        String[] second = t.split("");
        for (int i = 0; i < s.length(); i++) {
            String l = first[i];
            if (mapS.get(l) != null) {
                mapS.put(l, mapS.get(l) + 1);
            } else {
                mapS.put(l, 1);
            }

            String k = second[i];
            if (mapT.get(k) != null) {
                mapT.put(k, mapT.get(k) + 1);
            } else {
                mapT.put(k, 1);
            }
        }
        for (String letter : mapS.keySet()) {
            if (mapS.get(letter).equals(mapT.get(letter))) {
                continue;
            } else {
                return false;
            }
        }
        return true;
    }
}
