export default {
  getSkillLevelUpCost(store, skill) {
    let _skills = store['playerSkills'],
      _skill = _skills[skill],
      _level = _skill.level;
    let _cost = _level * 10;
    return _cost;
  }
}
