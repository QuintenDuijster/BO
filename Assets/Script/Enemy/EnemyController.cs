using UnityEngine;

public class EnemyController : MonoBehaviour
{
    [SerializeField] private GameObject Bullet;
    [SerializeField] private float minShootCooldown = 5;
    [SerializeField] private float maxShootCooldown = 8;
    private GameObject player; 

    private float shootCooldown = 0;
    void Start()
    {
        player = GameObject.FindWithTag("player");
	}

    void Update()
    {
        if (shootCooldown == 0 && (player.transform.position.z - (transform.position.z + transform.parent.position.z)) < 100f)
        {
            Vector3 location = new Vector3 (transform.position.x, transform.position.y, transform.position.z + 4f);
            GameObject newBullet = Instantiate(Bullet, location, Quaternion.identity);
            newBullet.transform.parent = transform;
            shootCooldown = Random.Range(minShootCooldown, maxShootCooldown);
        }

        if (shootCooldown > 0)
        {
            shootCooldown -= Time.deltaTime;
        }
    }
}
