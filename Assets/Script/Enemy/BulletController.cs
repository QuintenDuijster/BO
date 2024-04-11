using UnityEngine;

public class BulletController : MonoBehaviour
{
	[SerializeField] private float speed;
	private Rigidbody rb;
	private GameObject player;


    void Start()
	{
		rb = GetComponent<Rigidbody>();
		player = GameObject.FindWithTag("player");
		transform.LookAt(player.transform);
	}

	private void FixedUpdate()
	{
		rb.velocity = transform.forward * speed * Time.fixedDeltaTime;
	}

	private void OnTriggerEnter(Collider other)
	{
		if(other.tag != "Enemy")
		{
			if (other.tag == "player")
			{
				player.GetComponent<PlayerStats>().health--;
			}

			Destroy(gameObject);
		}
	}
}