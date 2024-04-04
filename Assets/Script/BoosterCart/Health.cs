using UnityEngine;

public class Health : MonoBehaviour
{
	private GameObject player;
	private PlayerStats playerStats;

	private void Start()
	{
		player = GameObject.FindGameObjectWithTag("player");
		playerStats = player.GetComponent<PlayerStats>();
	}

	private void OnTriggerEnter(Collider other)
	{
		if (other.gameObject.CompareTag("player"))
		{
			playerStats.health = playerStats.maxHealth;
			Destroy(gameObject);
		}
	}
}
