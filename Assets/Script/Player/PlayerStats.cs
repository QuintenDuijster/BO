using System;
using TMPro;
using UnityEngine;
using UnityEngine.SceneManagement;

public class PlayerStats : MonoBehaviour
{
	[SerializeField] private TMP_Text tmpTextComponent;
	[SerializeField] private TMP_Text tmpTextComponent_HP;
	[SerializeField] private Transform player;
	[SerializeField] private GameObject gameController;

	internal float metersTravelt = 0f;
	private ulong thousandMetersTravelt = 0;
	private string[] powerOf10 = new string[]
	{
			"", "thousand", "million", "billion", "trillion", "quadrillion", "sextillion", "septillion",
			"octillion", "nonillion", "decillion", "undecillion", "duodecillion",
			"tredecillion", "quattuordecillion", "quindecillion", "sexdecillion",
			"septendecillion", "octodecillion", "novemdecillion", "vigintillion",
			"unvigintillion", "duovigintillion", "trevigintillion", "quattuorvigintillion",
			"quinvigintillion", "sexvigintillion", "septenvigintillion", "octovigintillion",
			"novemvigintillion", "trigintillion"
	};

	internal float health { get; set; } = 10;
	internal float maxHealth { get; set; } = 10;
	internal int Damage { get; set; } = 1;
	internal int speed { get; set; } = 1;

	void LateUpdate()
	{
		if (tmpTextComponent != null)
		{
			tmpTextComponent.text = Math.Floor(metersTravelt) + powerOf10[thousandMetersTravelt];
		}

		if (tmpTextComponent_HP != null)
		{
			tmpTextComponent_HP.text = $"HP: {health}";
		}
	}

	internal void FixedUpdate()
	{
		Debug.Log(health);
		if (health > maxHealth)
		{
			health = maxHealth;
		}

		if (health <= 0)
		{
			SceneManager.LoadScene("DeathScreen");
		}
	}
}
