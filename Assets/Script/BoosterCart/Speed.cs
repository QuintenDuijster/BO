using UnityEngine;

public class Speed : MonoBehaviour
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
			playerStats.speed += 1;
			Destroy(gameObject);
		}
	}
}
